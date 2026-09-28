const code = `<div class="board">
  <section class="arena">
    <span class="item"></span>
    <span class="item"></span>
    <span class="item"></span>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "Selecione o segundo item.",

  hint2: "Use :nth-child(2).",

  solution: ".arena > .item:nth-child(2)",
}
