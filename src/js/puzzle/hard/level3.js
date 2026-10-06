const code = `<div class="board">
  <section class="arena">
    <article class="card"><span class="item"></span><span class="item"></span></article>
    <article class="card"><span class="item"></span><span class="item"></span></article>
    <article class="card"><span class="item"></span><span class="item"></span><span class="item"></span></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, false, true, false, false],

  hint1: "Terceiro card com segundo item.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/:has",

  solution: ".arena > .card:nth-child(3):has(> .item:nth-child(2))",
}
