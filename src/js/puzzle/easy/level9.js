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

  hint1: "Selecione o article que tem a classe target.",

  hint2: "Use tag + classe: article.target.",

  solution: ".arena > article.target",
}
