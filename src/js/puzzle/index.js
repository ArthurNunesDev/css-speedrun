import easy0 from './easy/level0.js'
import easy1 from './easy/level1.js'

import medium0 from './medium/level0.js'
import medium1 from './medium/level1.js'

import hard0 from './hard/level0.js'
import hard1 from './hard/level1.js'

import nightmare0 from './nightmare/level0.js'
import nightmare1 from './nightmare/level1.js'

import unknown0 from './unknown/level0.js'
import unknown1 from './unknown/level1.js'

const originalPuzzles = [
  level0,
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
  level7,
  level8,
  level9,
  level10,
]

const makePuzzle = ({
  lines,
  selected,
  solution,
  hint1 = 'Analise a estrutura do DOM com cuidado.',
  hint2 = 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors',
}) => {
  const code = lines.join('\n')
  const goal = lines.map((_, index) => selected.includes(index))

  const verificationCode = code
    .split('\n')
    .map((row, i) => row.replace('>', ` data-row="${i}">`))
    .join(' ')

  return {
    code,
    goal,
    verificationCode,
    hint1,
    hint2,
    solution,
  }
}

/*
 * MÉDIO
 * Foco: combinadores, nth-child, atributos e :not().
 */
const medio = [
  makePuzzle({
    lines: [
      '<ul>',
      '  <li class="item">A</li>',
      '  <li class="item disabled">B</li>',
      '  <li class="item">C</li>',
      '  <li class="item target">D</li>',
      '  <li class="item">E</li>',
      '</ul>',
    ],
    selected: [4],
    solution: 'li.item.target',
  }),

  makePuzzle({
    lines: [
      '<div class="cards">',
      '  <article class="card">A</article>',
      '  <article class="card disabled">B</article>',
      '  <article class="card">C</article>',
      '  <article class="card">D</article>',
      '</div>',
    ],
    selected: [1, 3],
    solution: '.cards > .card:not(.disabled)',
  }),

  makePuzzle({
    lines: [
      '<div class="menu">',
      '  <span class="item">A</span>',
      '  <span class="item">B</span>',
      '  <span class="item target">C</span>',
      '  <span class="item">D</span>',
      '  <span class="item target">E</span>',
      '</div>',
    ],
    selected: [3, 5],
    solution: '.menu > .item.target',
  }),

  makePuzzle({
    lines: [
      '<section>',
      '  <div data-role="normal"></div>',
      '  <div data-role="target"></div>',
      '  <div data-role="normal"></div>',
      '  <div data-role="target"></div>',
      '</section>',
    ],
    selected: [2, 4],
    solution: 'div[data-role="target"]',
  }),

  makePuzzle({
    lines: [
      '<div class="box">',
      '  <p>A</p>',
      '  <span>B</span>',
      '  <span class="target">C</span>',
      '  <span>D</span>',
      '</div>',
    ],
    selected: [3],
    solution: '.box > span.target',
  }),
]

/*
 * DIFÍCIL
 * Foco: combinações mais precisas.
 */
const dificil = [
  makePuzzle({
    lines: [
      '<section id="app">',
      '  <article class="card">',
      '    <span class="item">A</span>',
      '    <span class="item target">B</span>',
      '  </article>',
      '  <article class="card disabled">',
      '    <span class="item target">C</span>',
      '  </article>',
      '  <article class="card">',
      '    <span class="item">D</span>',
      '  </article>',
      '</section>',
    ],
    selected: [3],
    solution: '#app > .card:not(.disabled) > .item.target',
  }),

  makePuzzle({
    lines: [
      '<ul class="list">',
      '  <li>A</li>',
      '  <li>B</li>',
      '  <li class="target">C</li>',
      '  <li>D</li>',
      '  <li class="target">E</li>',
      '  <li>F</li>',
      '</ul>',
    ],
    selected: [3, 5],
    solution: '.list > li.target:nth-of-type(3), .list > li.target:nth-of-type(5)',
  }),

  makePuzzle({
    lines: [
      '<div class="wrapper">',
      '  <div class="group">',
      '    <span>A</span>',
      '    <span data-type="target">B</span>',
      '  </div>',
      '  <div class="group disabled">',
      '    <span data-type="target">C</span>',
      '  </div>',
      '</div>',
    ],
    selected: [4],
    solution: '.wrapper > .group:not(.disabled) > span[data-type="target"]',
  }),

  makePuzzle({
    lines: [
      '<main>',
      '  <div class="row">',
      '    <button>A</button>',
      '    <span>B</span>',
      '    <span class="target">C</span>',
      '  </div>',
      '  <div class="row">',
      '    <button>D</button>',
      '    <span class="target">E</span>',
      '  </div>',
      '</main>',
    ],
    selected: [4, 7],
    solution: 'main > .row > button + span.target',
  }),

  makePuzzle({
    lines: [
      '<div class="root">',
      '  <p class="a">A</p>',
      '  <p class="b">B</p>',
      '  <p class="target">C</p>',
      '  <p class="b">D</p>',
      '  <p class="target">E</p>',
      '</div>',
    ],
    selected: [3, 5],
    solution: '.root > p:not(.a):not(.b)',
  }),
]

/*
 * INSANO
 * Foco: :has(), :not(), :is(), atributos e estrutura.
 */
const insano = [
  makePuzzle({
    lines: [
      '<section id="app">',
      '  <article class="card">',
      '    <div class="content">',
      '      <span class="item">A</span>',
      '      <span class="item target" data-role="secret">B</span>',
      '    </div>',
      '  </article>',
      '  <article class="card disabled">',
      '    <div class="content">',
      '      <span class="item target" data-role="secret">C</span>',
      '    </div>',
      '  </article>',
      '  <article class="card">',
      '    <div class="content">',
      '      <span class="item">D</span>',
      '    </div>',
      '  </article>',
      '</section>',
    ],
    selected: [4],
    solution: '#app > .card:not(.disabled):has(.item[data-role="secret"]) .item[data-role="secret"]',
  }),

  makePuzzle({
    lines: [
      '<div class="layout">',
      '  <section class="panel">',
      '    <span class="target">A</span>',
      '  </section>',
      '  <section class="panel special">',
      '    <span>B</span>',
      '    <span class="target">C</span>',
      '  </section>',
      '  <section class="panel">',
      '    <span class="target">D</span>',
      '  </section>',
      '</div>',
    ],
    selected: [6],
    solution: '.layout > .panel.special:has(> span.target) > span.target',
  }),

  makePuzzle({
    lines: [
      '<div id="root">',
      '  <article class="card">',
      '    <span class="label">A</span>',
      '  </article>',
      '  <article class="card target-card">',
      '    <span class="label">B</span>',
      '    <span class="target">C</span>',
      '  </article>',
      '  <article class="card">',
      '    <span class="label">D</span>',
      '  </article>',
      '</div>',
    ],
    selected: [6],
    solution: '#root > article:is(.target-card):has(> .target) > .target',
  }),

  makePuzzle({
    lines: [
      '<section class="board">',
      '  <div class="cell">A</div>',
      '  <div class="cell">B</div>',
      '  <div class="cell special">C</div>',
      '  <div class="cell">D</div>',
      '  <div class="cell special target">E</div>',
      '  <div class="cell">F</div>',
      '</section>',
    ],
    selected: [5],
    solution: '.board > :is(.cell.special):not(:first-child):has(+ .cell) .target, .board > .cell.special.target',
  }),

  makePuzzle({
    lines: [
      '<main id="game">',
      '  <div class="zone">',
      '    <span class="item">A</span>',
      '    <span class="item">B</span>',
      '  </div>',
      '  <div class="zone locked">',
      '    <span class="item target">C</span>',
      '  </div>',
      '  <div class="zone active">',
      '    <span class="item">D</span>',
      '    <span class="item target" data-secret="true">E</span>',
      '  </div>',
      '</main>',
    ],
    selected: [10],
    solution: '#game > .zone.active:not(.locked):has([data-secret="true"]) > .item[data-secret="true"]',
  }),
]

const addVerificationCode = puzzle => {
  if (puzzle.verificationCode) return puzzle

  return {
    ...puzzle,
    verificationCode: puzzle.code
      .split('\n')
      .map((row, i) => row.replace('>', ` data-row="${i}">`))
      .join(' '),
  }
}

const facil = originalPuzzles.map(addVerificationCode)

export default {
  facil,
  medio: medio.map(addVerificationCode),
  dificil: dificil.map(addVerificationCode),
  insano: insano.map(addVerificationCode),
}
