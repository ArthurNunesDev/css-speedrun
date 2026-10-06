const code = `<div class="board">
  <section class="arena">
    <article class="card"></article>
    <article class="card"></article>
    <article class="card"></article>
    <article class="card"></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, false, true, false, false, false],

  hint1: "Conte apenas cards do mesmo tipo.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/:nth-of-type",

  solution: ".arena > .card:nth-of-type(3)",
}
