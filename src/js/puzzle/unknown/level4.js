const code = `<div class="board">
  <section class="arena">
    <article class="card alpha disabled" data-state="locked" data-code="BAD" data-role="fake"><div class="content"><span class="item special"></span><span class="item fake"></span></div></article>
    <article class="card beta" data-role="target" data-state="ready"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
    <article class="card gamma" data-state="ready" data-code="ZX99" data-role="target"><div class="content"><span class="item"></span><span class="item special"></span><span class="item"></span><span class="item decoy"></span></div></article>
    <article class="card target" data-state="ready" data-code="ZX99" data-role="final"><div class="content"><span class="item"></span><span class="item special"></span><span class="item"></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false, false],

  hint1: "Atributo, posi\u00e7\u00e3o, exclus\u00e3o e estrutura.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/Attribute_selectors",

  solution: ".arena > .card[data-role*=\"target\"]:not(.disabled):has(> .content > .item.special:nth-child(2)):not(:has(> .content > .item.decoy))",
}
