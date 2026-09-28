import Prism from 'prismjs'
import Timer from 'easytimer.js'
import JSConfetti from 'js-confetti'
import { createPopper } from '@popperjs/core'
import puzzleSets from './puzzles'

const jsConfetti = new JSConfetti()
const timer = new Timer({ precision: 'secondTenths' })

let puzzles = puzzleSets.facil
let currentDifficulty = 'facil'
let levelIndex = 0
let finalResult = ''
let isLevelSuccess = false
let hintTimeout1
let hintTimeout2

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
const resultScreen = document.querySelector('#result-screen')
const codeScreen = document.querySelector('#code-screen')

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

const difficultyPanel = document.createElement('section')

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

document.body.insertBefore(
  difficultyPanel,
  document.body.firstChild
)

const difficultyStyle = document.createElement('style')

difficultyStyle.textContent = `
  #difficulty-selector {
    width: min(100% - 32px, 1100px);
    margin: 18px auto 10px;
    padding: 14px 16px;
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 12px;
    background: rgba(20,20,24,.92);
    box-sizing: border-box;
    font-family: inherit;
  }

  #difficulty-selector .difficulty-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 10px;
  }

  #difficulty-selector .difficulty-header strong {
    font-size: 15px;
  }

  #difficulty-description {
    opacity: .65;
    font-size: 13px;
    text-align: right;
  }

  #difficulty-selector .difficulty-buttons {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 8px;
  }

  #difficulty-selector .difficulty-button {
    appearance: none;
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 9px;
    padding: 10px 12px;
    color: inherit;
    background: rgba(255,255,255,.05);
    cursor: pointer;
    font: inherit;
    font-weight: 700;
    transition:
      transform .15s ease,
      background .15s ease,
      border-color .15s ease;
  }

  #difficulty-selector .difficulty-button:hover:not(:disabled) {
    transform: translateY(-1px);
    background: rgba(255,255,255,.10);
    border-color: rgba(255,255,255,.28);
  }

  #difficulty-selector .difficulty-button.active {
    background: rgba(255,255,255,.14);
    border-color: rgba(255,255,255,.55);
  }

  #difficulty-selector
  .difficulty-button[data-difficulty="desconhecido"] {
    border-color: rgba(255, 70, 70, .35);
    background: rgba(80, 15, 15, .20);
  }

  #difficulty-selector
  .difficulty-button[data-difficulty="desconhecido"]:hover:not(:disabled) {
    background: rgba(120, 20, 20, .35);
    border-color: rgba(255, 80, 80, .65);
  }

  #difficulty-selector
  .difficulty-button[data-difficulty="desconhecido"].active {
    background: rgba(140, 20, 20, .38);
    border-color: rgba(255, 90, 90, .85);
    box-shadow: 0 0 18px rgba(255, 40, 40, .12);
  }

  #difficulty-selector .difficulty-button:disabled {
    opacity: .55;
    cursor: not-allowed;
  }

  @media (max-width: 850px) {
    #difficulty-selector .difficulty-buttons {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 600px) {
    #difficulty-selector .difficulty-buttons {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    #difficulty-selector .difficulty-header {
      align-items: flex-start;
      flex-direction: column;
      gap: 4px;
    }

    #difficulty-description {
      text-align: left;
    }
  }
`

document.head.appendChild(difficultyStyle)

const difficultyButtons = Array.from(
  difficultyPanel.querySelectorAll('[data-difficulty]')
)

const difficultyDescription =
  difficultyPanel.querySelector('#difficulty-description')

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

  puzzles = puzzleSets[difficulty]

  levelIndex = 0
  finalResult = ''
  isLevelSuccess = false

  results.length = 0

  resetTimer()
  resetHints()

  cssInput.value = ''

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

  if (levelIndex >= 1) {
    timer.start()
  }

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
}

const checkLevel = () => {
  const cssValue = cssInput.value

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
}

difficultyButtons.forEach(button => {
  button.addEventListener(
    'click',
    () => {
      if (button.disabled) {
        return
      }

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
      initLevel()
    } else {
      checkLevel()
    }
  }
)

cssInput.addEventListener(
  'keypress',
  e => {
    cssInput.classList.remove('error')

    if (e.keyCode === 13) {
      if (isLevelSuccess) {
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
