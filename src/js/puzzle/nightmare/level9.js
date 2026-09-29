const code = `<div class="board">
  <section class="arena">
    <article class="card alpha disabled" data-state="locked"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
    <article class="card target beta" data-state="ready"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
    <article class="card target" data-state="ready"><div class="content"><span class="item"></span><span class="item special"></span><span class="item decoy"></span></div></article>
    <article class="card target" data-state="ready"><div class="content"><span class="item"></span><span class="item"></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false, false],

  hint1: "Target, n\u00e3o disabled, sem decoy e special na posi\u00e7\u00e3o 2.",

  hint2: "\u00c9 uma combina\u00e7\u00e3o de quatro filtros.",

  solution: ".arena > .card.target:not(.disabled):not(:has(.decoy)):has(> .content > .item.special:nth-child(2))",
}
