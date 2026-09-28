const code = `<div class="board">
  <section class="arena">
    <article class="card disabled"></article>
    <article class="card ready"></article>
    <article class="card disabled"></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "Ignore o card disabled.",

  hint2: "Use :not().",

  solution: ".arena > .card:not(.disabled)",
}
