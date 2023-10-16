// (129) Usando Timestamp para Cirar um Cronometro Super Preciso - Parte 01
const timer = document.querySelector('#timer')

const tmpini = Date.now()
console.log(tmpini)

const contador = () => {
   const tmpatual = Date.now()
   let cont = tmpatual - tmpini
   let seg = Math.floor(cont / 1000)
   console.log(tmpatual)
   console.log(seg)
}
setInterval(contador, 1000)
