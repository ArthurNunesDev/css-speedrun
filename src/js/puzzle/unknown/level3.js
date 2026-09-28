const code = `<div class="board">
  <section class="arena">
    <article class="card alpha disabled" data-state="locked" data-code="BAD" data-role="fake"><div class="content"><span class="item special"></span><span class="item fake"></span></div></article>
    <article class="card gamma" data-state="ready"><div class="content"><span class="item"></span><span class="item"></span><span class="item"></span></div></article>
    <article class="card gamma" data-state="ready" data-code="ZX99" data-role="target"><div class="content"><span class="item"></span><span class="item special"></span><span class="item"></span></div></article>
    <article class="card target" data-state="ready" data-code="ZX99" data-role="final"><div class="content"><span class="item"></span><span class="item special"></span><span class="item"></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false, false],

  hint1: "V\u00e1rios n\u00edveis de pseudo-classes.",

  hint2: "Observe :is(), :where(), :has() e :not().",

  solution: ".arena > .card:is(.alpha, .beta, .gamma):where([data-state=\"ready\"]):has(> .content > .item:nth-child(3)):not(:has(.blocked))",
}
