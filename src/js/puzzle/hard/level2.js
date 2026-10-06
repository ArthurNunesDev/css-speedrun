const code = `<div class="board">
  <section class="arena">
    <article class="card" data-kind="normal"><div class="content"><span class="target"></span></div></article>
    <article class="card" data-kind="boss"><div class="content"><span class="target"></span></div></article>
    <article class="card"><div class="content"><span></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "O boss cont\u00e9m target dentro de content.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/Attribute_selectors",

  solution: ".arena > .card[data-kind=\"boss\"]:has(> .content > .target)",
}
