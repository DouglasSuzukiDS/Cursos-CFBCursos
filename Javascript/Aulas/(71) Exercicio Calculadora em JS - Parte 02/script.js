// (71) Exercicio Calculadora em JS - Parte 02

const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const ton = document.querySelector('#ton')
const tlimpar = document.querySelector('#tlimpar')

// console.log(teclasNum)
//console.log(teclasOp)

teclasNum.forEach((el) => {
   el.addEventListener('click', (evt)=> {
      display.innerHTML += evt.target.innerHTML
   })
})

teclasOp.forEach((el) => {
   el.addEventListener('click', (evt)=> {
      display.innerHTML += evt.target.innerHTML
   })
})

tlimpar.addEventListener('click', (evt) => {
   display.innerHTML = '0'
})