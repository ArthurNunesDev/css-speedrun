const code = `<div class="board">
  <section class="arena">
    <article class="card alpha disabled" data-state="locked" data-code="BAD" data-role="fake"><div class="content"><span class="item special"></span><span class="item fake"></span></div></article>
    <article class="card alpha" data-code="ZX99" data-state="ready"><div class="content"><span class="item"></span><span class="item"></span><span class="item target"></span></div></article>
    <article class="card beta" data-code="ZX98" data-state="ready"><div class="content"><span class="item"></span><span class="item"></span><span class="item target"></span></div></article>
    <article class="card target" data-state="ready" data-code="ZX99" data-role="final"><div class="content"><span class="item"></span><span class="item special"></span><span class="item"></span></div></article>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false, false],

  hint1: "O atributo come\u00e7a e termina com valores espec\u00edficos.",

  hint2: "Combine ^=, $=, :not() e :has().",

  solution: ".arena > .card[data-code^=\"ZX\"][data-code$=\"99\"]:not([data-state=\"locked\"]):has(> .content > .item.target:nth-child(3))",
}
