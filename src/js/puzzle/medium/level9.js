const code = `<div class="board">
  <section class="arena">
    <article class="card"></article>
    <article class="card"></article>
    <article class="card"></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, true, false, true, false, false],

  hint1: "Selecione a posi\u00e7\u00e3o \u00edmpar desejada.",

  hint2: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Selectors/:nth-child",

  solution: ".arena > .card:nth-child(2n+1)",
}
