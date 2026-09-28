const code = `<div class="board">
  <section class="arena">
    <article class="card"><span class="target"></span></article>
    <article class="card"><span class="target"></span></article>
    <article class="card"><span class="item"></span></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, true, false, false, false, false],

  hint1: "N\u00e3o disabled e contendo target.",

  hint2: "Combine :not() e :has().",

  solution: ".arena > .card:not(.disabled):has(.target)",
}
