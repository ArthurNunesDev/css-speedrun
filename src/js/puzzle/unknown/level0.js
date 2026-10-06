const code = `<div class="board">
  <section class="arena">
    <article class="card alpha disabled" data-state="locked" data-code="BAD" data-role="fake"><div class="content"><span class="item special"></span><span class="item fake"></span></div></article>
    <article class="card omega" data-state="ready"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
    <article class="card gamma" data-state="ready" data-code="ZX99" data-role="target"><div class="content"><span class="item"></span><span class="item special"></span><span class="item"></span></div></article>
    <article class="card target" data-state="ready" data-code="ZX99" data-role="final"><div class="content"><span class="item"></span><span class="item special"></span><span class="item"></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false, false],

  hint1: "Quatro filtros precisam coincidir.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/:is",

  solution: ".arena > .card:is(.alpha, .omega)[data-state=\"ready\"]:not(.disabled):has(> .content > .item.special:nth-child(2))",
}
