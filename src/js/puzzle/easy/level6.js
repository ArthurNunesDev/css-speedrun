const code = `<div class="board">
  <section class="arena">
    <div class="row"><span class="item"></span></div>
    <div class="row"><span class="target"></span></div>
    <div class="row"><span class="item"></span></div>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "O alvo est\u00e1 dentro de uma row.",

  hint2: "Use o combinador de filho.",

  solution: ".arena > .row > .target",
}
