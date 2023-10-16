// (56) Template Strings
const caixa = document.querySelector('#caixa')

const curso = 'Javascript'
const canal = 'CFB Cursos'
//const frase = 'Este o curso de ' + curso + ' do canal ' + canal
const frase = `Este é o curso de ${curso} do canal ${canal}`
//caixa.innerHTML = frase

const carros = ['Polo', 'Golf', 'T-Cross', 'HRV']
let ul = `<ul>`
carros.map((el) => {
   ul += `<li>${el}</li>`
})
ul + `</ul>`

caixa.innerHTML = ul