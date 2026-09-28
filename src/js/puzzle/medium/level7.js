const code = `<div class="board">
  <section class="arena">
    <article class="card" data-role="target"></article>
    <article class="card" data-role="get"></article>
    <article class="card" data-role="normal"></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "O valor termina com get.",

  hint2: "Use $=.",

  solution: ".arena > .card[data-role$=\"get\"]",
}
