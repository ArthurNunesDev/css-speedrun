const code = `<div class="board">
  <section class="arena">
    <article class="card alpha disabled" data-state="locked"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
    <article class="card beta" data-state="ready"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
    <article class="card target" data-state="ready"><div class="content"><span class="item"></span><span class="item"></span></div></article>
    <article class="card target" data-state="ready"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false, false],

  hint1: "Classe, exclus\u00e3o e posi\u00e7\u00e3o interna.",

  hint2: "Combine :is(), :not(), :has() e :nth-child().",

  solution: ".arena > .card:is(.alpha, .beta):not(.disabled):has(> .content > .item.special:nth-child(2))",
}
