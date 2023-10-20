// Praticando Desestruturação em Typescript #P2 Curso de Typescript Completo #P36

// let aa, bb, cc, dd
let av36 = [1036, 2036, 3036, 4036]

// let [aa, bb, cc, dd] = av
let [aa36, bb36, cc36, dd36] = ['Verder', 'Amarelo', 'Azul', 'Branco']

const obj36 = {
   cor136: 'Verde',
   cor236: 'Amarelo',
   cor336: 'Azul',
   cor436: 'Branco'
}

let { cor136, cor236, cor336, cor436 } = obj36

// console.log(cor136)
// console.log(cor236)
// console.log(cor336)
// console.log(cor436)

// let [num136 = 0, num236 = 0, num336 = 0] = [10, 20]
// let [num136 = 0, num236 = 0, num336 = 0] = [10, 20, 30, 40, 50, 60, 70, 80, 90]
let [num136 = 0, num236 = 0, ...num336] = [10, 20, 30, 40, 50, 60, 70, 80, 90]

console.log(num136)
console.log(num236)
console.log(num336)

const fcores = () => {
   return ['Verder', 'Amarelo', 'Azul', 'Branco']
}
let [co1, co2, co3, co4] = fcores()
console.log(co1)
console.log(co2)
console.log(co3)
console.log(co4)

let texto = 'Curso de Typescript'
let [...t] = texto.split(' ')
let [p1, p2, p3] = texto.split(' ')
console.log(t)
console.log(p1)
console.log(p2)
console.log(p3)
