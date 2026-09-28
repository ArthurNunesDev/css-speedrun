const code = `<div class="board">
  <section class="arena">
    <article class="card alpha disabled" data-state="locked"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
    <article class="card beta" data-type="alpha"><div class="content"><span class="item target special"></span></div></article>
    <article class="card target" data-type="omega" data-state="locked"><div class="content"><span class="item target special"></span></div></article>
    <article class="card target" data-state="ready"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false, false],

  hint1: "Tipo permitido, n\u00e3o locked e target.special.",

  hint2: "Use :is(), atributo e :has().",

  solution: ".arena > .card:is([data-type=\"alpha\"], [data-type=\"omega\"]):not([data-state=\"locked\"]):has(.target.special)",
}
