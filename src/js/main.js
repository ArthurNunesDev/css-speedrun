import Prism from 'prismjs'
import Timer from 'easytimer.js'
import JSConfetti from 'js-confetti'
import { createPopper } from '@popperjs/core'
import puzzleSets from './puzzle'

const jsConfetti = new JSConfetti()
const timer = new Timer({ precision: 'secondTenths' })

let puzzles = puzzleSets.facil
let currentDifficulty = 'facil'
let levelIndex = 0
let finalResult = ''
let isLevelSuccess = false
let hintTimeout1
let hintTimeout2
let rankedMode = false
let rankedPlayer = ''
let rankedResult = null
let introCompleted = false
let timerEnabled = false
let attempts = 0

const results = []

const htmlGoal = document.querySelector('#html-goal')
const htmlInput = document.querySelector('#html-preview')
const verification = document.querySelector('#verification')
const submitButton = document.querySelector('#submit')
const cssInput = document.querySelector('#css-input')
const timebox = document.querySelector('#timer')
const levelContainer = document.querySelector('#levels')
const hintLink1 = document.querySelector('#hint1')
const hintLink2 = document.querySelector('#hint2')
const solution = document.querySelector('#solution')
const solutionCode = document.querySelector('#solution-code')
const nextLevel = document.querySelector('#next-level')
const tooltip = document.querySelector('#tooltip')
const clearSelectorButton = document.querySelector('#clear-selector')
const selectorFeedback = document.querySelector('#selector-feedback')
const selectionCount = document.querySelector('#selection-count')
const attemptsElement = document.querySelector('#attempts strong')
const resultScreen = document.querySelector('#result-screen')
const codeScreen = document.querySelector('#code-screen')
const gameSection = document.querySelector('main > section')
const gameDetails = document.querySelector('main > details')

const RANKING_STORAGE_KEY = 'css-speedrun-ranking-v1'

const loadRankings = () => {
  try {
    const saved = localStorage.getItem(RANKING_STORAGE_KEY)
    const parsed = saved ? JSON.parse(saved) : {}
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

const saveRankings = rankings => {
  try {
    localStorage.setItem(RANKING_STORAGE_KEY, JSON.stringify(rankings))
    return true
  } catch {
    return false
  }
}

const timeToTenths = time => (
  (Number(time.minutes) || 0) * 600 +
  (Number(time.seconds) || 0) * 10 +
  (Number(time.secondTenths) || 0)
)

const formatTenths = total => {
  const minutes = Math.floor(total / 600)
  const seconds = Math.floor((total % 600) / 10)
  const tenths = total % 10

  return (
    `${getFormattedNumber(minutes)}:${getFormattedNumber(seconds)}:${tenths}`
  )
}

const difficultyLabel = key => difficultyNames[key] || key

const getRanking = difficulty => {
  const rankings = loadRankings()
  const entries = Array.isArray(rankings[difficulty]) ? rankings[difficulty] : []

  return entries
    .filter(entry => entry && entry.name && Number.isFinite(entry.time))
    .sort((a, b) => a.time - b.time)
    .slice(0, 10)
}

const registerRankedResult = () => {
  if (!rankedMode || !rankedPlayer) {
    return null
  }

  const rankings = loadRankings()
  const current = getRanking(currentDifficulty)
  const previous = current.find(
    entry => entry.name.toLowerCase() === rankedPlayer.toLowerCase()
  )

  const time = timeToTenths(timer.getTimeValues())

  if (previous && previous.time <= time) {
    const position = current.findIndex(entry => entry.name === previous.name) + 1

    return {
      position,
      bestTime: previous.time,
      isNewBest: false,
    }
  }

  const withoutPlayer = current.filter(
    entry => entry.name.toLowerCase() !== rankedPlayer.toLowerCase()
  )

  withoutPlayer.push({
    name: rankedPlayer,
    time,
  })

  withoutPlayer.sort((a, b) => a.time - b.time)
  rankings[currentDifficulty] = withoutPlayer.slice(0, 10)
  saveRankings(rankings)

  const updated = getRanking(currentDifficulty)
  const position = updated.findIndex(
    entry => entry.name.toLowerCase() === rankedPlayer.toLowerCase()
  ) + 1

  return {
    position,
    bestTime: time,
    isNewBest: !previous || time < previous.time,
  }
}

const createRankingUI = () => {
  const rankingActions = document.createElement('div')
  rankingActions.className = 'ranking-actions'

  const rankingButton = document.createElement('button')
  rankingButton.type = 'button'
  rankingButton.className = 'ranked-button'
  rankingButton.id = 'ranked-mode-button'
  rankingButton.textContent = '🏆 Modo Ranqueado'

  const viewRankingButton = document.createElement('button')
  viewRankingButton.type = 'button'
  viewRankingButton.className = 'ranking-view-button'
  viewRankingButton.textContent = 'Ver Ranking'

  rankingActions.append(rankingButton, viewRankingButton)
  difficultyPanel.appendChild(rankingActions)

  const modal = document.createElement('div')
  modal.id = 'player-modal'
  modal.className = 'ranking-modal hidden'
  modal.innerHTML = `
    <div class="ranking-modal-backdrop"></div>
    <div class="ranking-modal-card" role="dialog" aria-modal="true" aria-labelledby="player-modal-title">
      <button type="button" class="ranking-close" aria-label="Fechar">×</button>
      <h2 id="player-modal-title">🏆 Modo Ranqueado</h2>
      <p>Digite seu nome para registrar seu resultado no ranking.</p>
      <input id="player-name-input" maxlength="18" autocomplete="off" placeholder="Nome do jogador">
      <div class="ranking-modal-actions">
        <button type="button" id="player-cancel">Cancelar</button>
        <button type="button" id="player-start">Começar</button>
      </div>
      <small>Seu melhor tempo será salvo neste navegador.</small>
    </div>
  `
  document.body.appendChild(modal)

  const rankingScreen = document.createElement('section')
  rankingScreen.id = 'ranking-screen'
  rankingScreen.className = 'hidden'
  rankingScreen.innerHTML = `
    <div class="ranking-heading">
      <div>
        <strong>🏆 Ranking</strong>
        <span>Top 10 por dificuldade</span>
      </div>
      <button type="button" id="ranking-back">Voltar ao jogo</button>
    </div>
    <div id="ranking-tabs" class="ranking-tabs"></div>
    <div id="ranking-list" class="ranking-list"></div>
  `
  document.querySelector('main').insertBefore(
    rankingScreen,
    gameSection
  )

  const resultInfo = document.createElement('div')
  resultInfo.id = 'ranked-result'
  resultInfo.className = 'ranked-result hidden'
  resultScreen.appendChild(resultInfo)

  const openModal = () => {
    modal.classList.remove('hidden')
    const input = modal.querySelector('#player-name-input')
    input.value = rankedPlayer
    setTimeout(() => input.focus(), 0)
  }

  const closeModal = () => modal.classList.add('hidden')

  const renderRanking = difficulty => {
    const list = getRanking(difficulty)
    const tabs = rankingScreen.querySelector('#ranking-tabs')
    const container = rankingScreen.querySelector('#ranking-list')

    tabs.innerHTML = Object.keys(difficultyNames).map(key => `
      <button type="button" class="${key === difficulty ? 'active' : ''}" data-ranking-difficulty="${key}">
        ${difficultyNames[key]}
      </button>
    `).join('')

    container.innerHTML = list.length
      ? list.map((entry, index) => `
          <div class="ranking-row ${entry.name.toLowerCase() === rankedPlayer.toLowerCase() && keySafe(entry.name) ? 'current-player' : ''}">
            <span class="ranking-position">#${index + 1}</span>
            <strong>${escapeHtml(entry.name)}</strong>
            <span>${formatTenths(entry.time)}</span>
          </div>
        `).join('')
      : '<p class="ranking-empty">Ainda não há resultados nesta dificuldade.</p>'

    tabs.querySelectorAll('[data-ranking-difficulty]').forEach(tab => {
      tab.addEventListener('click', () => renderRanking(tab.dataset.rankingDifficulty))
    })
  }

  const showRanking = difficulty => {
    renderRanking(difficulty)
    resetTimer()
    difficultyPanel.classList.add('hidden')
    gameDetails.classList.add('hidden')
    gameSection.classList.add('hidden')
    rankingScreen.classList.remove('hidden')
  }

  const hideRanking = () => {
    timer.stop()
    rankingScreen.classList.add('hidden')
    difficultyPanel.classList.remove('hidden')
    gameDetails.classList.remove('hidden')
    gameSection.classList.remove('hidden')
  }

  rankingButton.addEventListener('click', openModal)
  modal.querySelector('.ranking-close').addEventListener('click', closeModal)
  modal.querySelector('.ranking-modal-backdrop').addEventListener('click', closeModal)
  modal.querySelector('#player-cancel').addEventListener('click', closeModal)
  modal.querySelector('#player-start').addEventListener('click', () => {
    const input = modal.querySelector('#player-name-input')
    const name = input.value.trim()

    if (!name) {
      input.classList.add('error')
      input.focus()
      return
    }

    input.classList.remove('error')
    rankedPlayer = name
    rankedMode = true
    closeModal()
    startDifficulty(currentDifficulty)
  })

  modal.querySelector('#player-name-input').addEventListener('keypress', event => {
    if (event.key === 'Enter') {
      modal.querySelector('#player-start').click()
    }
  })

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal()
    }
  })

  document.querySelector('#ranking-back').addEventListener('click', hideRanking)
  viewRankingButton.addEventListener('click', () => showRanking(currentDifficulty))

  return {
    showRanking,
    resultInfo,
    rankingButton,
  }
}

const escapeHtml = value => value.replace(/[&<>"']/g, char => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#039;',
}[char]))

const keySafe = value => Boolean(value)



const difficultyNames = {
  facil: 'Fácil',
  medio: 'Médio',
  dificil: 'Difícil',
  insano: '💀 Nightmare',
  desconhecido: '❓ ???',
}

const difficultyDescriptions = {
  facil: 'Seletores básicos e fundamentos',
  medio: 'Combinações e pseudo-classes',
  dificil: 'Seletores avançados',
  insano: '💀 CSS avançado sem piedade',
  desconhecido: '❓ 10× além de Nightmare',
}

const difficultyPanel = document.createElement('div')

difficultyPanel.id = 'difficulty-selector'

difficultyPanel.innerHTML = `
  <div class="difficulty-header">
    <strong>Dificuldade</strong>

    <span id="difficulty-description">
      ${difficultyDescriptions[currentDifficulty]}
    </span>
  </div>

  <div class="difficulty-buttons">
    ${Object.entries(difficultyNames)
      .map(
        ([key, name]) => `
          <button
            type="button"
            class="difficulty-button"
            data-difficulty="${key}"
          >
            ${name}
          </button>
        `
      )
      .join('')}
  </div>
`

document.querySelector('main').insertBefore(
  difficultyPanel,
  document.querySelector('main > section')
)

const difficultyButtons = Array.from(
  difficultyPanel.querySelectorAll('[data-difficulty]')
)

const difficultyDescription =
  difficultyPanel.querySelector('#difficulty-description')

const rankingUI = createRankingUI()

const getFormattedNumber = i =>
  i.toString().padStart(2, 0)

const updateDifficultyButtons = locked => {
  difficultyButtons.forEach(button => {
    const selected =
      button.dataset.difficulty === currentDifficulty

    button.classList.toggle('active', selected)
    button.disabled = locked
  })

  difficultyDescription.textContent =
    difficultyDescriptions[currentDifficulty]
}

const buildLevels = () => {
  const levelItems = puzzles
    .map(
      (p, i) => `
        <li data-level="${i}">
          ${i === 0 ? 'Intro' : `Level ${i}`}
          <i class="timeResult"></i>
        </li>
      `
    )
    .join(' ')

  levelContainer.innerHTML = levelItems
}

const resetTimer = () => {
  timer.stop()
  timer.reset()

  timebox.innerHTML = '00:00:0'

  timebox.classList.remove(
    'done',
    'success'
  )

  timebox.removeAttribute('data-before')
}

const resetAttempts = () => {
  attempts = 0
  if (attemptsElement) {
    attemptsElement.textContent = '0'
  }
}

const clearSelectionPreview = () => {
  verification.querySelectorAll('[data-selector-preview]').forEach(element => {
    element.removeAttribute('data-selector-preview')
    element.removeAttribute('data-selector-match')
  })

  htmlInput.querySelectorAll('.selector-preview').forEach(element => {
    element.classList.remove('selector-preview')
  })

  if (selectionCount) {
    selectionCount.textContent = 'Digite um seletor para testar.'
  }

  selectorFeedback?.classList.remove('valid', 'invalid', 'target')
}

const previewSelector = () => {
  clearSelectionPreview()

  const value = cssInput.value.trim()

  if (!value) {
    return
  }

  let selectedHtml

  try {
    selectedHtml = verification.querySelectorAll(`div ${value}`)
  } catch {
    if (selectionCount) {
      selectionCount.textContent = 'Seletor CSS inválido.'
    }
    selectorFeedback?.classList.add('invalid')
    return
  }

  const selectedRows = new Set(
    Array.from(selectedHtml).map(element =>
      Number(element.getAttribute('data-row'))
    )
  )

  selectedHtml.forEach(element => {
    element.setAttribute('data-selector-preview', '')
  })

  let preview = htmlInput.querySelector('.selector-preview')
  if (!preview) {
    preview = document.createElement('ul')
    preview.className = 'selector-preview'
    htmlInput.appendChild(preview)
  }

  preview.innerHTML = puzzles[levelIndex].goal.map((goal, row) => {
    if (!selectedRows.has(row)) {
      return '<li></li>'
    }

    return goal
      ? '<li class="selected-target"></li>'
      : '<li class="selected-wrong"></li>'
  }).join('')

  const goals = puzzles[levelIndex].goal
  const targetCount = goals.filter(Boolean).length
  const selectedTargetCount = Array.from(selectedRows)
    .filter(row => goals[row])
    .length
  const wrongCount = Array.from(selectedRows)
    .filter(row => !goals[row])
    .length

  if (selectionCount) {
    selectionCount.textContent =
      `${selectedHtml.length} elemento${selectedHtml.length === 1 ? '' : 's'} selecionado` +
      `${selectedHtml.length === 1 ? '' : 's'} · ${selectedTargetCount}/${targetCount} alvo${targetCount === 1 ? '' : 's'}` +
      (wrongCount ? ` · ${wrongCount} fora do alvo` : '')
  }

  if (selectedTargetCount === targetCount && wrongCount === 0) {
    selectorFeedback?.classList.add('valid', 'target')
  } else {
    selectorFeedback?.classList.add('invalid')
  }
}

const resetHints = () => {
  clearTimeout(hintTimeout1)
  clearTimeout(hintTimeout2)

  hintLink1.classList.remove('fade-in')
  hintLink2.classList.remove('fade-in')
}

const startDifficulty = difficulty => {
  if (!puzzleSets[difficulty]) {
    return
  }

  currentDifficulty = difficulty

  timer.stop()
  timer.reset()
  puzzles = puzzleSets[difficulty]

  levelIndex = 0
  finalResult = ''
  isLevelSuccess = false

  results.length = 0
  rankedResult = null
  introCompleted = false
  timerEnabled = false

  resetTimer()
  resetHints()

  cssInput.value = ''
  resetAttempts()
  clearSelectionPreview()

  cssInput.removeAttribute('disabled')
  cssInput.classList.remove(
    'error',
    'success'
  )

  submitButton.removeAttribute('disabled')

  solution.classList.add('hidden')
  nextLevel.classList.add('hidden')

  timebox.classList.remove('done')

  if (resultScreen) {
    resultScreen.classList.add('hidden')
  }

  if (rankingUI.resultInfo) {
    rankingUI.resultInfo.classList.add('hidden')
    rankingUI.resultInfo.innerHTML = ''
  }

  if (codeScreen) {
    codeScreen.classList.remove('hidden')
  }

  buildLevels()
  updateDifficultyButtons(false)

  initLevel()
}

const lockDifficulty = () => {
  updateDifficultyButtons(true)
}

const levelSuccess = () => {
  solutionCode.innerHTML = Prism.highlight(
    puzzles[levelIndex].solution,
    Prism.languages.markup,
    'css'
  )

  levelIndex++

  isLevelSuccess = true

  timer.pause()

  results.push(
    Object.assign(
      {},
      timer.getTimeValues()
    )
  )

  solution.classList.remove('hidden')
  cssInput.classList.add('success')

  clearTimeout(hintTimeout1)
  clearTimeout(hintTimeout2)

  if (levelIndex === 1) {
    introCompleted = true
    nextLevel.classList.remove('hidden')
  }

  if (levelIndex === puzzles.length) {
    finalResult =
      timer.getTimeValues().toString([
        'minutes',
        'seconds',
        'secondTenths',
      ])

    timer.stop()

    jsConfetti.addConfetti()

    jsConfetti.addConfetti({
      emojis: ['🌈', '✨', '🦄'],
      emojiSize: 50,
      confettiNumber: 50,
    })

    timebox.classList.add('done')

    submitButton.setAttribute(
      'disabled',
      true
    )

    cssInput.setAttribute(
      'disabled',
      true
    )

    if (rankedMode) {
      rankedResult = registerRankedResult()
    }

    generateWinScreen()

    return
  }

  for (
    const level of
    document.querySelectorAll('#levels > li')
  ) {
    const levelNumber =
      parseInt(
        level.getAttribute('data-level')
      )

    if (levelNumber === levelIndex) {
      level.classList.add('active')
    }

    if (levelNumber === levelIndex - 1) {
      level.classList.remove('active')
      level.classList.add('done')

      const prevResult =
        results[levelNumber - 1] || {
          minutes: 0,
          seconds: 0,
          secondTenths: 0,
        }

      const newResult =
        results[levelNumber]

      if (!newResult) {
        continue
      }

      const difference =
        newResult.secondTenths -
        prevResult.secondTenths +
        (newResult.seconds -
          prevResult.seconds) *
          10 +
        (newResult.minutes -
          prevResult.minutes) *
          600

      const minutes =
        parseInt(difference / 600)

      const seconds =
        parseInt(
          (difference -
            minutes * 600) /
            10
        )

      const secondTenths =
        parseInt(
          difference -
            minutes * 600 -
            seconds * 10
        )

      const resultTime =
        `${getFormattedNumber(minutes)}:` +
        `${getFormattedNumber(seconds)}:${secondTenths}`

      timebox.setAttribute(
        'data-before',
        resultTime
      )

      timebox.classList.add('success')

      setTimeout(() => {
        timebox.classList.remove('success')
      }, 1500)

      level.querySelector(
        '.timeResult'
      ).innerHTML =
        `[${resultTime}]`
    }
  }
}

const initLevel = () => {
  isLevelSuccess = false

  cssInput.classList.remove('success')

  solution.classList.add('hidden')
  nextLevel.classList.add('hidden')

  cssInput.removeAttribute('disabled')

  htmlInput.innerHTML = Prism.highlight(
    puzzles[levelIndex].code,
    Prism.languages.markup,
    'markup'
  )

  htmlGoal.innerHTML =
    puzzles[levelIndex].goal.reduce(
      (acc, curr) =>
        acc +
        (curr ? '➡️\n' : '\n'),
      ''
    )

  verification.innerHTML =
    puzzles[levelIndex].verificationCode

  resetHints()

  if (puzzles[levelIndex].hint1) {
    tooltip.innerHTML =
      puzzles[levelIndex].hint1

    hintTimeout1 = setTimeout(() => {
      hintLink1.classList.add('fade-in')
    }, 10000)
  }

  if (puzzles[levelIndex].hint2) {
    hintLink2.setAttribute(
      'href',
      puzzles[levelIndex].hint2
    )

    hintTimeout2 = setTimeout(() => {
      hintLink2.classList.add('fade-in')
    }, 20000)
  }

  cssInput.value = ''
  clearSelectionPreview()
}

const checkLevel = () => {
  const cssValue = cssInput.value.trim()

  if (!cssValue) {
    cssInput.classList.add('error')
    if (selectionCount) {
      selectionCount.textContent = 'Digite um seletor antes de verificar.'
    }
    selectorFeedback?.classList.add('invalid')
    return
  }

  attempts += 1
  if (attemptsElement) {
    attemptsElement.textContent = String(attempts)
  }

  let selectedHtml

  try {
    selectedHtml =
      verification.querySelectorAll(
        `div ${cssValue}`
      )
  } catch (e) {
    cssInput.classList.add('error')
    selectedHtml = []
  }

  const selectedRows =
    Array.from(selectedHtml)
      .map(elem =>
        parseInt(
          elem.getAttribute(
            'data-row'
          )
        )
      )

  const result =
    puzzles[levelIndex].goal.map(
      (expectedResult, i) =>
        selectedRows.includes(i) ===
        expectedResult
    )

  const completedLevel =
    result.every(r => r)

  let resultString = ''
  let rowResult

  for (
    let i = 0;
    i < puzzles[levelIndex].goal.length;
    i++
  ) {
    if (puzzles[levelIndex].goal[i]) {
      rowResult = result[i]
        ? '<li class="correct"></li>'
        : '<li></li>'
    } else {
      rowResult = result[i]
        ? '<li></li>'
        : '<li class="wrong"></li>'
    }

    resultString += rowResult
  }

  if (
    !htmlInput.querySelector('.check')
  ) {
    htmlInput.innerHTML +=
      '<ul class="check"></ul>'
  }

  htmlInput.querySelector(
    '.check'
  ).innerHTML = resultString

  if (completedLevel) {
    levelSuccess()
  } else {
    previewSelector()
  }
}

const generateWinScreen = () => {
  const tweetLink =
    document.querySelector(
      '#share-tweet'
    )

  const winTweetText =
    `I've solved all #CSS puzzles on CSS Speedrun™ within ${finalResult} ` +
    `and all I got was this stupid tweet.\n\n` +
    `https://css-speedrun.netlify.app/`

  if (tweetLink) {
    tweetLink.setAttribute(
      'href',
      `https://twitter.com/intent/tweet?text=${encodeURI(
        winTweetText
      ).replace(
        '#',
        '%23'
      )}`
    )
  }

  if (resultScreen) {
    resultScreen.classList.remove(
      'hidden'
    )
  }

  if (rankingUI.resultInfo) {
    if (rankedMode && rankedResult) {
      rankingUI.resultInfo.innerHTML = `
        <div class="ranked-result-main">
          <span>🏆 Sua posição</span>
          <strong>${rankedResult.position > 0 ? `#${rankedResult.position}` : 'Fora do Top 10'}</strong>
        </div>
        <div class="ranked-result-details">
          <span>Melhor tempo</span>
          <strong>${formatTenths(rankedResult.bestTime)}</strong>
        </div>
        <p>${rankedResult.isNewBest ? '🎉 Novo recorde pessoal!' : 'Seu melhor resultado continua registrado.'}</p>
        <button type="button" id="open-ranking-from-result">Ver ranking</button>
      `
      rankingUI.resultInfo.classList.remove('hidden')
      rankingUI.resultInfo.querySelector('#open-ranking-from-result')
        .addEventListener('click', () => rankingUI.showRanking(currentDifficulty))
    }
  }
}

difficultyButtons.forEach(button => {
  button.addEventListener(
    'click',
    () => {
      if (button.disabled) {
        return
      }

      rankedMode = false
      rankedPlayer = ''
      startDifficulty(
        button.dataset.difficulty
      )
    }
  )
})

initLevel()

updateDifficultyButtons(false)

submitButton.addEventListener(
  'click',
  () => {
    cssInput.classList.remove('error')

    if (isLevelSuccess) {
      if (levelIndex >= 1 && introCompleted) {
        timerEnabled = true
        timer.start()
      }

      initLevel()
    } else {
      checkLevel()
    }
  }
)

cssInput.addEventListener(
  'input',
  previewSelector
)

clearSelectorButton?.addEventListener('click', () => {
  cssInput.value = ''
  cssInput.classList.remove('error')
  previewSelector()
  cssInput.focus()
})

cssInput.addEventListener(
  'keypress',
  e => {
    cssInput.classList.remove('error')

    if (e.keyCode === 13) {
      if (isLevelSuccess) {
        if (levelIndex >= 1 && introCompleted) {
          timerEnabled = true
          timer.start()
        }

        initLevel()
      } else {
        checkLevel()
      }
    }
  }
)

timer.addEventListener(
  'secondTenthsUpdated',
  () => {
    if (!timerEnabled) {
      timer.stop()
      timer.reset()
      timebox.innerHTML = '00:00:0'
      return
    }

    timebox.innerHTML =
      timer
        .getTimeValues()
        .toString([
          'minutes',
          'seconds',
          'secondTenths',
        ])
  }
)

const popperInstance = createPopper(
  hintLink1,
  tooltip,
  {
    placement: 'bottom-end',

    modifiers: [
      {
        name: 'offset',

        options: {
          offset: [0, 8],
        },
      },
    ],
  }
)

function show() {
  tooltip.setAttribute(
    'data-show',
    ''
  )

  popperInstance.update()
}

function hide() {
  tooltip.removeAttribute(
    'data-show'
  )
}

const showEvents = [
  'mouseenter',
  'focus',
]

const hideEvents = [
  'mouseleave',
  'blur',
]

showEvents.forEach(event => {
  hintLink1.addEventListener(
    event,
    show
  )
})

hideEvents.forEach(event => {
  hintLink1.addEventListener(
    event,
    hide
  )
})
