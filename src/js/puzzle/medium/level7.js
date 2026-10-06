const code = `<div class="board">
  <section class="arena">
    <article class="card" data-role="normal"></article>
    <article class="card" data-role="target"></article>
    <article class="card" data-role="targeted"></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "O valor termina com get.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/Attribute_selectors",

  solution: ".arena > .card[data-role$=\"get\"]",
}
