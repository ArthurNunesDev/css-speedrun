const code = `<div class="board">
  <section class="arena">
    <article class="card" data-type="gamma"><span></span></article>
    <article class="card" data-type="alpha"><span></span></article>
    <article class="card disabled" data-type="beta"><span></span></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "Dois tipos v\u00e1lidos, disabled proibido.",

  hint2: "Use :is() com atributos.",

  solution: ".arena > .card:is([data-type=\"alpha\"], [data-type=\"beta\"]):not(.disabled)",
}
