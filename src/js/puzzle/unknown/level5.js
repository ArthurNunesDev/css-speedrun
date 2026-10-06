const code = `<div class="board">
  <section class="arena">
    <article class="card alpha disabled" data-state="locked" data-code="BAD" data-role="fake"><div class="content"><span class="item special"></span><span class="item fake"></span></div></article>
    <article class="card beta" data-state="armed"><div class="content"><span class="item special"></span></div></article>
    <article class="card gamma" data-state="ready" data-code="ZX99" data-role="target"><div class="content"><span class="item"></span><span class="item special"></span><span class="item"></span><span class="item blocked"></span></div></article>
    <article class="card target" data-state="ready" data-code="ZX99" data-role="final"><div class="content"><span class="item"></span><span class="item special"></span><span class="item"></span><span class="item blocked"></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false, false],

  hint1: "Dois estados aceitos e duas condi\u00e7\u00f5es internas.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/:is",

  solution: ".arena > .card:is([data-state=\"ready\"], [data-state=\"armed\"]):not([data-state=\"locked\"]):has(> .content > .item.special):not(:has(> .content > .item.blocked))",
}
