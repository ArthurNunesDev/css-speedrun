const code = `<div class="board">
  <section class="arena">
    <article class="card"></article>
    <article class="card target"><span class="item"></span></article>
    <article class="card"></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "Selecione o item dentro do card target.",

  hint2: "Combine dois n\u00edveis de filho.",

  solution: ".arena > .card.target > .item",
}
