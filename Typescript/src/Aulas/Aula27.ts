// Aprendendo sobre INTERFACE e Objetos Literais em Typescript - Curso de Typescript Completo #P27
interface curso271 {
   titulo: string
   desc: string
   aulas: number
   maxAlunos?: number
}

let curso271: curso271
let curso272: curso271
let curso273: curso271

curso271 = {
   titulo: 'Typescript',
   desc: 'Curso de Typescript',
   aulas: 100,
   maxAlunos: 50
}

curso272 = {
   titulo: 'Javacript',
   desc: 'Curso de Javacript',
   aulas: 200,
   maxAlunos: 80
}

curso273 = {
   titulo: 'C++',
   desc: 'Curso de Javacript',
   aulas: 200,
   // maxAlunos: 100
}

console.log(curso271)
console.log(curso272)
console.log(curso273)