const code = `<div class="board">
  <section class="arena">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
  </section>
</div>`

export default {
  code,

  goal: [false, false, true, false, false, false, false],

  hint1: "O primeiro card \u00e9 o alvo.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/:first-child",

  solution: ".arena > .card:first-child",
}
