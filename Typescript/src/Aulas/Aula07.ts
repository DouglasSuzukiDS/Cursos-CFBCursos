// Tuplas => Se pode dizer o tipo da variavel na posição
let coisas: [string, number, boolean] = ['Corda', 10, true]
coisas.push('Kit Médico', 5, true) // Não se pode acessar as posições adicionadas depois

coisas[2] = false

console.log(coisas)
console.log(coisas[0])