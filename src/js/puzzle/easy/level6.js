const code = `<div class="board">
  <section class="arena">
    <div class="row"><span class="item"></span></div>
    <div class="row"><span class="target"></span></div>
    <div class="row"><span class="item"></span></div>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "Selecione a segunda row.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/Combinators",

  solution: ".arena > .row:nth-child(2)",
}
