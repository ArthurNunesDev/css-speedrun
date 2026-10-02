const code = `<div class="board">
  <section class="arena">
    <div class="card"></div>
    <div class="card target"></div>
    <div class="card"></div>
  </section>
</div>`

export default {
  code,

  goal: [false, false, false, true, false, false, false],

  hint1: "Selecione o card target.",

  hint2: "Combine .arena, > e .target.",

  id: 'easy-01',
  title: 'O primeiro alvo',
  concept: 'Seletores de classe',
  explanation: 'Combine classes para encontrar exatamente o elemento que possui as características do alvo.',
  acceptedSelectors: [
    '.card.target',
    '.arena > .target',
    '.arena .target',
    '.arena > .card.target',
  ],
  solution: ".arena > .card.target",
}
