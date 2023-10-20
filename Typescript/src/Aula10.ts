// Curso de Typescript Completo #P10 diferenças entre NULL, UNDEFINED e UNKNOWN em Typescript

// NULL => Valor nulo
let vnome: string | null
// vnome = 'Nick'
vnome = null
console.log(vnome)

let vnome2: any
console.log(vnome2)

// UNKNOWN => Só pode ser atribuído em tipos unknown ou any
let vnome3: unknown = 10 
let vnum = vnome3
console.log(vnum)