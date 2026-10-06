const code = `<div class="board">
  <section class="arena">
    <article class="card"><span class="disabled"></span></article>
    <article class="card"><span class="item"></span></article>
    <article class="card"><span class="disabled"></span></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "O card n\u00e3o pode conter disabled.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/:not",

  solution: ".arena > .card:not(:has(.disabled))",
}
