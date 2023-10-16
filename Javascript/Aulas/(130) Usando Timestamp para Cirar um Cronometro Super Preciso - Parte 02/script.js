// (130) Usando Timestamp para Cirar um Cronometro Super Preciso - Parte 02
const timer = document.querySelector('#timer')

const tmpini = Date.now()
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
   
   let form = `${hora < 10 ? '0' + hora : hora }:${minuto < 10 ? '0' + minuto : minuto}:${segundo < 10 ? '0' + segundo : segundo}`

   return form
}


setInterval(contador, 1000)
