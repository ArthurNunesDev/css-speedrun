const code = `<div class="board">
  <section class="arena">
    <span class="item"></span>
    <span class="item"></span>
    <span class="item"></span>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "Selecione o segundo item.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/:nth-child",

  solution: ".arena > .item:nth-child(2)",
}
