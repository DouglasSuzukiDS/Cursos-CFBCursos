// (98) Aprendendo sobre a Funcao Symbol - Parte 01
const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for('Shanks') // Expecifica o valor Global
const s4 = Symbol.for('Barba Branca') // Expecifica o valor Global

console.log(s1)
console.log(s2)

console.log(s1 === s2)
console.log(s3 === s4)

console.log(typeof s1)

console.log(Symbol.keyFor(s3)) // Retorna o valor do Symbol Global
console.log(Symbol.keyFor(s4)) // Retorna o valor do Symbol Global