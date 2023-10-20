// Praticando Desestruturação em Typescript - Curso de Typescript Completo #P35
// let aa, bb, cc, dd
let av = [10, 20, 30, 40]

// let [aa, bb, cc, dd] = av
let [aa, bb, cc, dd] = ['Verder', 'Amarelo', 'Azul', 'Branco']

const obj35 = {
   cor1: 'Verde',
   cor2: 'Amarelo',
   cor3: 'Azul',
   cor4: 'Branco'
}

let { cor1, cor2, cor3, cor4 } = obj35