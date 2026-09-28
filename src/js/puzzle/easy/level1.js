const code = `<div class="board">
  <section class="arena">
    <div class="card"></div>
    <div class="card active"></div>
    <div class="card"></div>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "Selecione o \u00fanico card ativo.",

  hint2: "Use a classe active.",

  solution: ".arena > .card.active",
}
