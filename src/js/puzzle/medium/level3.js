const code = `<div class="board">
  <section class="arena">
    <article class="card" data-type="normal"></article>
    <article class="card" data-type="target"></article>
    <article class="card" data-type="normal"></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "O atributo type identifica o alvo.",

  hint2: "Use [data-type=\"target\"].",

  solution: ".arena > .card[data-type=\"target\"]",
}
