const code = `<div class="board">
  <section class="arena">
    <div class="row"><span class="item"></span><span class="item"></span></div>
    <div class="row"><span class="item"></span><span class="item"></span></div>
    <div class="row"><span class="item"></span><span class="item"></span></div>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "Segundo item da segunda row.",

  hint2: "Use :nth-child() em dois n\u00edveis.",

  solution: ".arena > .row:nth-child(2) > .item:nth-child(2)",
}
