const code = `<div class="board">
  <section class="arena">
    <article class="card alpha disabled" data-state="locked"><div class="content"><span class="item"></span><span class="item special"></span><span class="blocked"></span></div></article>
    <article class="card beta"><div class="content"><span class="item special"></span></div></article>
    <article class="card target"><div class="content"><span class="item special"></span><span class="blocked"></span></div></article>
    <article class="card target" data-state="ready"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false, false],

  hint1: "Fam\u00edlia + special + aus\u00eancia de blocked.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/:where",

  solution: ".arena > .card:where(.alpha, .beta):has(.special):not(:has(.blocked))",
}
