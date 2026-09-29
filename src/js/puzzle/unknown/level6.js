const code = `<div class="board">
  <section class="arena">
    <article class="card alpha disabled" data-state="locked" data-code="BAD" data-role="fake"><div class="content"><span class="item special"></span><span class="item fake"></span></div></article>
    <article class="card gamma"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
    <article class="card gamma" data-state="ready" data-code="ZX99" data-role="target"><div class="content"><span class="item"></span><span class="item special"></span><span class="item"></span></div></article>
    <article class="card target" data-state="ready" data-code="ZX99" data-role="final"><div class="content"><span class="item"></span><span class="item special"></span><span class="item"></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false, false],

  hint1: "A posi\u00e7\u00e3o do card tamb\u00e9m \u00e9 parte da solu\u00e7\u00e3o.",

  hint2: "Combine posi\u00e7\u00e3o externa e interna.",

  solution: ".arena > .card:nth-child(2):not(.disabled):has(> .content > .item.special:nth-child(2)):not(:has(> .content > .item.decoy))",
}
