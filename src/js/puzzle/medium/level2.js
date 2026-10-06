const code = `<div class="board">
  <section class="arena">
    <article class="card" data-state="locked"></article>
    <article class="card" data-state="ready"></article>
    <article class="card" data-state="locked"></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "O estado ready identifica o alvo.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/Attribute_selectors",

  solution: ".arena > .card[data-state=\"ready\"]",
}
