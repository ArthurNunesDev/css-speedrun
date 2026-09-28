const code = `<div class="board">
  <section class="arena">
    <article class="card" data-role="normal"></article>
    <article class="card" data-role="target-one"></article>
    <article class="card" data-role="normal"></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "O valor come\u00e7a com tar.",

  hint2: "Use ^=.",

  solution: ".arena > .card[data-role^=\"tar\"]",
}
