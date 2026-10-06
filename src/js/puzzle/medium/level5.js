const code = `<div class="board">
  <section class="arena">
    <article class="card disabled hidden"></article>
    <article class="card disabled"></article>
    <article class="card ready"></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, false, true, false, false],

  hint1: "Duas classes precisam ser exclu\u00eddas.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/:not",

  solution: ".arena > .card:not(.disabled):not(.hidden)",
}
