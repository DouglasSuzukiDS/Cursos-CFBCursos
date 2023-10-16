"use strict";
let numeros = [20, 30, 40];
// let numeros: number[] = [20, 30, 40]
// let numeros: Array<number | string> = [20, 30, 40, 'Shanks']
// let numeros: (number | string)[] = [20, 30, 40, 'Shanks']
numeros.push(50); // Insere no final
numeros.unshift(10); // Insere no inicio
numeros.pop(); // Remove do final
numeros.shift(); // Remove do inicio
console.log(numeros);
let numeros_ro = [100, 200, 300]; // Remove os metodos que alteram os elementos
console.log(numeros_ro);
