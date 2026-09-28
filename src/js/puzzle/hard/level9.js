const code = `<div class="board">
  <section class="arena">
    <article class="card alpha"><span></span></article>
    <article class="card omega"><span class="special"></span></article>
    <article class="card disabled omega"><span class="special"></span></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "Fam\u00edlia, special e aus\u00eancia de disabled.",

  hint2: "Use :where(), :has() e :not().",

  solution: ".arena > .card:where(.alpha, .omega):has(.special):not(.disabled)",
}
