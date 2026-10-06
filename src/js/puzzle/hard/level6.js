const code = `<div class="board">
  <section class="arena">
    <article class="card" data-code="BAD"><span class="special"></span><span class="item"></span></article>
    <article class="card" data-code="X123"><span class="item"></span><span class="special"></span></article>
    <article class="card" data-code="NO"><span></span></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "C\u00f3digo come\u00e7a em X e special \u00e9 segundo.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/Attribute_selectors",

  solution: ".arena > .card[data-code^=\"X\"]:has(.special:nth-child(2))",
}
