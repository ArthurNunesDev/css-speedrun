const code = `<div class="board">
  <section class="arena">
    <article class="card locked"><span class="item"></span><span class="item"></span><span class="item"></span></article>
    <article class="card"><span class="item"></span><span class="item"></span><span class="item"></span></article>
    <article class="card"><span class="item"></span></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "Tem terceiro item e n\u00e3o \u00e9 locked.",

  hint2: "Combine :has() e :not().",

  solution: ".arena > .card:has(> .item:nth-child(3)):not(.locked)",
}
