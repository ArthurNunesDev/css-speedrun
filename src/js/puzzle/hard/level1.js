const code = `<div class="board">
  <section class="arena">
    <article class="card gamma"><span class="special"></span></article>
    <article class="card alpha"><span class="special"></span></article>
    <article class="card beta"><span class="item"></span></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "Alpha ou beta, contendo special.",

  hint2: "Use :is() e :has().",

  solution: ".arena > .card:is(.alpha, .beta):has(.special)",
}
