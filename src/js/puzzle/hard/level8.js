const code = `<div class="board">
  <section class="arena">
    <article class="card"><div class="content"><span class="target"></span></div><span class="blocked"></span></article>
    <article class="card"><div class="content"><span class="target"></span></div></article>
    <article class="card"><div class="content"><span></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "Tem target e n\u00e3o tem blocked.",

  hint2: "Use dois :has().",

  solution: ".arena > .card:has(> .content > .target):not(:has(.blocked))",
}
