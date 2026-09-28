const code = `<div class="board">
  <section class="arena">
    <article class="card"></article>
    <article class="card"></article>
    <article class="card"></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, true, false, false, false, false],

  hint1: "Selecione a posi\u00e7\u00e3o \u00edmpar desejada.",

  hint2: "Use uma f\u00f3rmula em :nth-child().",

  solution: ".arena > .card:nth-child(2n+1)",
}
