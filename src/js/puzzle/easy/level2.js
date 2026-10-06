const code = `<div class="board">
  <section class="arena">
    <span class="item"></span>
    <span class="item target"></span>
    <span class="item"></span>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "Selecione o item target.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/Combinators",

  solution: ".arena > .item.target",
}
