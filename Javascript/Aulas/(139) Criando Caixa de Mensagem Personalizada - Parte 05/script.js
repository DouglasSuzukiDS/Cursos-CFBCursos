// (139) Criando Caixa de Mensagem Personalizada - Parte 05
import { Cxmsg } from "./cxmsg.js"

const config = {
   cor: '#48F',
   tipo: 'ok', // Tipos: Ok, sn
   textos: ['SIM', 'NÃO'],
   comando_sn: () => { },
}

const fsim = () => {
   console.log('Botao SIM pressionado')
}

const btn_mostrarcxmsg1 = document.querySelector('#btn_mostrarcxmsg1')
const btn_mostrarcxmsg2 = document.querySelector('#btn_mostrarcxmsg2')
const btn_mostrarcxmsg3 = document.querySelector('#btn_mostrarcxmsg3')

btn_mostrarcxmsg1.addEventListener('click', () => {
   config.tipo = 'ok'
   Cxmsg.mostrar(config, 'CFB Cursos', 'Curso de Javascript')
})

btn_mostrarcxmsg2.addEventListener('click', () => {
   config.tipo = 'sn'
   config.comando_sn = () => fsim()
   Cxmsg.mostrar(config, 'Youtube', 'Canal com Cursos de Programação')
})

btn_mostrarcxmsg3.addEventListener('click', () => {
   config.tipo = 'sn'
   config.textos = ['OK', 'CANCELA']
   Cxmsg.mostrar(config, 'Javascript', 'Aula 138')
})