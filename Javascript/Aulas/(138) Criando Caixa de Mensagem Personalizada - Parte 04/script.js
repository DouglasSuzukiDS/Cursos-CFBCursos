// (138) Criando Caixa de Mensagem Personalizada - Parte 04
import { Cxmsg } from "./cxmsg.js"

const config = {
   // titulo: 'CFB Cursos',
   // texto: 'Curso de Javascript, criando caixa de mensagem personalizada',
   cor: '#48F'
}

Cxmsg.config(config) 

const btn_mostrarcxmsg1 = document.querySelector('#btn_mostrarcxmsg1')
const btn_mostrarcxmsg2 = document.querySelector('#btn_mostrarcxmsg2')
const btn_mostrarcxmsg3 = document.querySelector('#btn_mostrarcxmsg3')

btn_mostrarcxmsg1.addEventListener('click', () => {
   Cxmsg.mostrar('CFB Cursos', 'Curso de Javascript')
})

btn_mostrarcxmsg2.addEventListener('click', () => {
   Cxmsg.mostrar('Youtube', 'Canal com Cursos de Programação')
})

btn_mostrarcxmsg3.addEventListener('click', () => {
   Cxmsg.mostrar('Javascript', 'Aula 138')
})