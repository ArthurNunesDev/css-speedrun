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

  hint2: "Use :nth-of-type(3).",

  solution: ".arena > .card:nth-of-type(3)",
}
