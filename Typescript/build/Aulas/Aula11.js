"use strict";
// Curso de Typescript Completo #P11 Aprendendo sobre Type Assertion e Typecast em Typescript
let nvalor;
let svalor;
let uvalor;
uvalor = 10;
svalor = '20';
// nvalor = <number><unknown>svalor
// nvalor = <number>uvalor
// svalor = <string>uvalor
// svalor += 10
// console.log(typeof(uvalor))
// console.log(uvalor)
// console.log(typeof(nvalor))
// console.log(nvalor)
// console.log(typeof(svalor))
// console.log(svalor)
nvalor = Number.parseInt(svalor); // Interface number 
console.log(typeof (nvalor));
console.log(nvalor);
svalor = nvalor.toString();
console.log(typeof (svalor));
console.log(svalor);
