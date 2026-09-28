import easy0 from './easy/level0.js'
import easy1 from './easy/level1.js'
import easy2 from './easy/level2.js'
import easy3 from './easy/level3.js'
import easy4 from './easy/level4.js'
import easy5 from './easy/level5.js'
import easy6 from './easy/level6.js'
import easy7 from './easy/level7.js'
import easy8 from './easy/level8.js'
import easy9 from './easy/level9.js'

import medium0 from './medium/level0.js'
import medium1 from './medium/level1.js'
import medium2 from './medium/level2.js'
import medium3 from './medium/level3.js'
import medium4 from './medium/level4.js'
import medium5 from './medium/level5.js'
import medium6 from './medium/level6.js'
import medium7 from './medium/level7.js'
import medium8 from './medium/level8.js'
import medium9 from './medium/level9.js'

import hard0 from './hard/level0.js'
import hard1 from './hard/level1.js'
import hard2 from './hard/level2.js'
import hard3 from './hard/level3.js'
import hard4 from './hard/level4.js'
import hard5 from './hard/level5.js'
import hard6 from './hard/level6.js'
import hard7 from './hard/level7.js'
import hard8 from './hard/level8.js'
import hard9 from './hard/level9.js'

import nightmare0 from './nightmare/level0.js'
import nightmare1 from './nightmare/level1.js'
import nightmare2 from './nightmare/level2.js'
import nightmare3 from './nightmare/level3.js'
import nightmare4 from './nightmare/level4.js'
import nightmare5 from './nightmare/level5.js'
import nightmare6 from './nightmare/level6.js'
import nightmare7 from './nightmare/level7.js'
import nightmare8 from './nightmare/level8.js'
import nightmare9 from './nightmare/level9.js'

import unknown0 from './unknown/level0.js'
import unknown1 from './unknown/level1.js'
import unknown2 from './unknown/level2.js'
import unknown3 from './unknown/level3.js'
import unknown4 from './unknown/level4.js'
import unknown5 from './unknown/level5.js'
import unknown6 from './unknown/level6.js'
import unknown7 from './unknown/level7.js'
import unknown8 from './unknown/level8.js'
import unknown9 from './unknown/level9.js'

const addVerificationCode = puzzle => {
if (puzzle.verificationCode) {
return puzzle
}

return {
...puzzle,

```
verificationCode: puzzle.code
  .split('\n')
  .map((row, i) =>
    row.replace('>', ` data-row="${i}">`)
  )
  .join(' '),
```

}
}

/*

* FÁCIL
*
* 10 níveis separados.
  */
  const facil = [
  easy0,
  easy1,
  easy2,
  easy3,
  easy4,
  easy5,
  easy6,
  easy7,
  easy8,
  easy9,
  ]

/*

* MÉDIO
*
* 10 níveis separados.
  */
  const medio = [
  medium0,
  medium1,
  medium2,
  medium3,
  medium4,
  medium5,
  medium6,
  medium7,
  medium8,
  medium9,
  ]

/*

* DIFÍCIL
*
* 10 níveis separados.
  */
  const dificil = [
  hard0,
  hard1,
  hard2,
  hard3,
  hard4,
  hard5,
  hard6,
  hard7,
  hard8,
  hard9,
  ]

/*

* INSANO
*
* 10 níveis separados.
  */
  const insano = [
  nightmare0,
  nightmare1,
  nightmare2,
  nightmare3,
  nightmare4,
  nightmare5,
  nightmare6,
  nightmare7,
  nightmare8,
  nightmare9,
  ]

/*

* ???
*
* 10 níveis separados.
  */
  const desconhecido = [
  unknown0,
  unknown1,
  unknown2,
  unknown3,
  unknown4,
  unknown5,
  unknown6,
  unknown7,
  unknown8,
  unknown9,
  ]


  export default {
  facil: facil.map(addVerificationCode),

medio: medio.map(addVerificationCode),

dificil: dificil.map(addVerificationCode),

insano: insano.map(addVerificationCode),

desconhecido: desconhecido.map(addVerificationCode),
}
