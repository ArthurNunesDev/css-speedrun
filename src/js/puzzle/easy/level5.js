const code = `<div class="board">
  <section class="arena">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, false, true, false, false],

  hint1: "O \u00faltimo card \u00e9 o alvo.",

  hint2: "Use :last-child.",

  solution: ".arena > .card:last-child",
}
