const code = `<div class="board">
  <section class="arena">
    <article class="card alpha disabled" data-state="locked"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
    <article class="card candidate" data-state="ready"><div class="content"><span class="item special"></span></div></article>
    <article class="card target" data-state="ready"><div class="content"><span class="item special"></span></div></article>
    <article class="card target" data-state="ready"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, false, true, false, false, false],

  hint1: "Tipo, special, estado e posi\u00e7\u00e3o.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/:is",

  solution: ".arena > .card:is(.target, .candidate):has(.special):not(.disabled):nth-child(3)",
}
