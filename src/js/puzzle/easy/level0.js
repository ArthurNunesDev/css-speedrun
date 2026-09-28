const code = `<div class="board">
  <section class="arena">
    <div class="card"></div>
    <div class="card target"></div>
    <div class="card"></div>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "Selecione o card target.",

  hint2: "Combine .arena, > e .target.",

  solution: ".arena > .card.target",
}
