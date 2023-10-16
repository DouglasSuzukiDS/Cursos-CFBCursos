// (131) Usando Timestamp para Cirar um Cronometro Super Preciso - Parte 03
import { Cxmsg } from "./cxmsg.js"

const config = {
   cor: '#4F8'
}

Cxmsg.config(config)

const timer = document.querySelector('#timer')
const btn_iniciar = document.querySelector('#btn_iniciar')
const btn_parar = document.querySelector('#btn_parar')
const btn_zerar = document.querySelector('#btn_zerar')

let intervalo

let tmpini = null
// console.log(tmpini)

const contador = () => {
   const tmpatual = Date.now()
   let cont = tmpatual - tmpini
   let seg = cont / 1000
   // console.log(tmpatual)
   timer.innerHTML = converter(seg)
}

const converter = (seg) => {
   let hora = Math.floor(seg / 3600) // 3600 são os segundos na hora

   let resto = seg % 3600
   let minuto = Math.floor(resto / 60) // 60 são os segundos no minuto

   let segundo = Math.floor(resto % 60) // 60 são os segundos no minuto
   
   let tempoFormatado = `${hora < 10 ? '0' + hora : hora }:${minuto < 10 ? '0' + minuto : minuto}:${segundo < 10 ? '0' + segundo : segundo}`

   return tempoFormatado
}

btn_iniciar.addEventListener('click', (evt) => {
   tmpini = Date.now()
   intervalo = setInterval(contador, 1000)
})

btn_parar.addEventListener('click', (evt) => {
   clearInterval(intervalo)
})

btn_zerar.addEventListener('click', (evt) => {
   tmpini = Date.now()
   timer.innerHTML = '00:00:00'
   clearInterval(intervalo)
   Cxmsg.mostrar('Cronometro', 'O cronometro foi zerado')
})