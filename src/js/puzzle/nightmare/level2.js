const code = `<div class="board">
  <section class="arena">
    <article class="card alpha disabled" data-state="locked"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
    <article class="card beta" data-state="ready"><div class="content"><span class="item"></span><span class="item"></span><span class="item"></span></div></article>
    <article class="card gamma" data-state="ready"><div class="content"><span class="item"></span><span class="item blocked"></span></div></article>
    <article class="card target" data-state="ready"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false, false],

  hint1: "Terceiro item e nenhum blocked.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/:not",

  solution: ".arena > .card:has(> .content > .item:nth-child(3)):not(:has(> .content > .item.blocked))",
}
