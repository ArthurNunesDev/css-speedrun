const code = `<div class="board">
  <section class="arena">
    <article class="card alpha disabled" data-state="locked"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
    <article class="card beta" data-state="ready"><div class="content"><span class="item"></span><span class="item target"></span></div></article>
    <article class="card gamma" data-state="ready"><div class="content"><span class="item"></span><span class="item blocked"></span></div></article>
    <article class="card target" data-state="ready"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false, false],

  hint1: "Duas exclus\u00f5es e um target na posi\u00e7\u00e3o 2.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/:not",

  solution: ".arena > .card:not(.disabled):not(.hidden):has(> .content > .item.target:nth-child(2))",
}
