// (33) querySelector e querySelectorAll - Manipulação de DOM - Parte 04
const divTodos = [...document.getElementsByTagName('div')]
const cursosTodos = [...document.getElementsByClassName('curso')]
const cursosC1 = [...document.getElementsByClassName('c1')]
const cursosC2 = [...document.getElementsByClassName('c2')]
const cursoEspecial = document.getElementById('c1')

// const query_divTodos = document.querySelector('div')
// const query_divTodos = document.querySelectorAll('div')

// const query_divTodos = [...document.querySelectorAll('div')]
// const query_divTodos = [...document.querySelectorAll('div, p')]
// const query_divTodos = [...document.querySelectorAll('div[class]')]
const query_divTodos = [...document.querySelectorAll('div > p')]

const query_cursosTodos = [...document.querySelectorAll('.curso')]
// const query_cursosC1 = [...document.querySelectorAll('.c1')] 
const query_cursosC1 = [...document.querySelectorAll('.c1, p')]
const query_cursosC2 = [...document.querySelectorAll('.c2')]
const query_cursoEspecial = document.querySelector('#c1')


console.log(query_divTodos)
// console.log(query_cursosTodos)
// console.log(query_cursosC1)
// console.log(query_cursosC2)
// console.log(query_cursoEspecial)

// console.log(divTodos)
// console.log(cursosTodos)
// console.log(cursosC1)
// console.log(cursosC2)
// console.log(cursoEspecial)

// cursosC2.map((el) => {
//     el.classList.add('destaque')
// })