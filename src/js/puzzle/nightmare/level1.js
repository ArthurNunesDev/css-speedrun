const code = `<div class="board">
  <section class="arena">
    <article class="card alpha disabled" data-state="locked"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
    <article class="card beta" data-state="ready"><div class="content"><span class="item target"></span></div></article>
    <article class="card target" data-state="locked"><div class="content"><span class="item target"></span></div></article>
    <article class="card target" data-state="ready"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false, false],

  hint1: "Estado ready, sem lock e com target.",

  hint2: "Combine atributos e :has().",

  solution: ".arena > .card[data-state=\"ready\"]:not([data-lock=\"true\"]):has(> .content > .item.target)",
}
