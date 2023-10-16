// (52) Aprendendo sobre Array - Parte 01 
const caixa = document.querySelector('#caixa')

let cores = ['Azul', 'Verde', 'Vermelho', ['Claro', 'Escuro', 'Médio']]
let cursos = ['HTML', 'CSS', 'Javascript', cores]

//cursos[0] = 2023

// Push() => Adiciona no Final
// Pop() => Removeno Final
// Unshift() => Adiciona no Inicio
// Shift() => Remove no Inicio

/*cursos.push('C++') 
cursos.push('Python')
cursos.pop()*/

/*cursos.push('C++') 
cursos.unshift('Python')
cursos.shift()*/

console.log(cursos[3][3][2])

cursos.map((el) => {
   let p = document.createElement('p')
   p.innerHTML = el
   caixa.appendChild(p)
})

// console.log(cursos)