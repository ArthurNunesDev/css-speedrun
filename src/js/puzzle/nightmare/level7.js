const code = `<div class="board">
  <section class="arena">
    <article class="card alpha disabled" data-state="locked"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
    <article class="card beta" data-state="ready"><div class="content"><span class="item"></span><span class="item"></span></div></article>
    <article class="card target" data-state="ready"><div class="content"><span class="item special"></span><span class="item"></span></div></article>
    <article class="card target" data-state="ready"><div class="content"><span class="item special"></span><span class="item special"></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false, false],

  hint1: "Segundo item presente, primeiro n\u00e3o pode ser special.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/:has",

  solution: ".arena > .card[data-state=\"ready\"]:has(> .content > .item:nth-child(2)):not(:has(> .content > .item:first-child.special))",
}
