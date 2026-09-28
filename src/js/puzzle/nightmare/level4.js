const code = `<div class="board">
  <section class="arena">
    <article class="card alpha disabled" data-state="locked"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
    <article class="card beta" data-role="target"></article>
    <article class="card target" data-role="targetish"></article>
    <article class="card target" data-state="ready"><div class="content"><span class="item"></span><span class="item special"></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false, false],

  hint1: "O atributo come\u00e7a e termina com partes espec\u00edficas.",

  hint2: "Combine ^= e $= no mesmo atributo.",

  solution: ".arena > .card[data-role^=\"tar\"][data-role$=\"get\"]:has(.special)",
}
