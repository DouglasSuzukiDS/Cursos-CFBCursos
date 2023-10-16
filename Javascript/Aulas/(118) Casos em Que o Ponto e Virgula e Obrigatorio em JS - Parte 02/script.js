// (118) Casos em Que o Ponto e Virgula e Obrigatorio em JS - Parte 02

// let i = null
// for(i = 0; i < 10; i++) {
//    console.log(i)
// }

// for(i = 0; i < 10; i++); // Aqui o For não tem scopo
// console.log(i)

// let i = null; i = 0
// console.log(i)

// [, (
// let canal = 'CFB Cursos';
// ['J', 'a', 'v', 'a', 's', 'c', 'i', 'p', 't'].forEach(l => console.log(l))

// let n1 = [1, 2]
// let n2 = [2, 4];
// [n1, n2].map(v => console.log(v))

// let n = null;
// (n = 10)
// console.log(n)

// let numeros = [10, 20, 30];
// [n1, n2, n3] = numeros

// let numeros = [10, 20, 30]
// let [n1, n2, n3] = numeros
// console.log(n1)
// console.log(n2)
// console.log(n3)

let num = {
   n1: 10,
   n2: 20,
   n3: 30
}
let {n1, n2, n3} = num
console.log(n1)
console.log(n2)
console.log(n3)