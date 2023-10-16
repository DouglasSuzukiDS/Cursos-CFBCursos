// (114) Aprendendo sobre Desestruturação - Parte 01
// let numeros = [10, 20, 30, 40]
// let [a, b, c, d] = numeros

// [a, b, c, d] = [10, 20, 30, 40]

// ({a, b, c, d } = { a: 'verde', b: 'amarelo', c: 'azul', d: 'branco' })

/*let a, b , c, d
[a,  b = 0, c = 0, d = 0] = [10]
console.log(a, b, c, d)*/

/*let a = 10;
let b = 20;

[a, b] = [b, a]

console.log(a, b)*/

let numeros = () => {
   return [10, 20, 30, 40]
}
//console.log(numeros())

let [a, b, c, d] = numeros()
console.log(a, b, c, d)