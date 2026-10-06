const code = `<div class="board">
  <section class="arena">
    <div class="row"><span class="item"></span><span class="item"></span></div>
    <div class="row"><span class="item"></span><span class="item"></span></div>
    <div class="row"><span class="item"></span><span class="item"></span></div>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "A segunda row, que tem um segundo item.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/:has",

  solution: ".arena > .row:nth-child(2):has(> .item:nth-child(2))",
}
