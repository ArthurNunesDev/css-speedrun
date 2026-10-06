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

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/Class_selectors",

  solution: ".arena > .card.active",
}
