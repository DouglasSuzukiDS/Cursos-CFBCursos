// (113) Aprendendo sobre a Propriedade accessKey

const q1 = document.getElementById('q1')
const q2 = document.getElementById('q2')
const posX = document.getElementById('posx')
const posY = document.getElementById('posy')
const altura = document.getElementById('altura')
const largura = document.getElementById('largura')

/* console.log(q1.getBoundingClientRect())
// let DOMRect_q1 = q1.getBoundingClientRect() // Retorna os dados do elemento
// posX.innerHTML = `posX: ${DOMRect_q1.x}`
// posY.innerHTML = `posY: ${DOMRect_q1.y}`
// largura.innerHTML = `Largura: ${DOMRect_q1.width}`
// altura.innerHTML = `Altura: ${DOMRect_q1.height}` */

q1.accessKey = 'b' // Para utilizar precisa apertar ALT + Tecla
q2.accessKey = 'n'

console.log(`q1: ${q1.accessKey}`)
console.log(`q2: ${q2.accessKey}`)

const info = (el) => {
   let DOMRect_q1 = el.getBoundingClientRect()

   posX.innerHTML = `posX: ${DOMRect_q1.x}`
   posY.innerHTML = `posY: ${DOMRect_q1.y}`
   largura.innerHTML = `Largura: ${DOMRect_q1.width}`
   altura.innerHTML = `Altura: ${DOMRect_q1.height}`
}

q1.addEventListener('click', (evt) => {
   info(evt.target)
})

q2.addEventListener('click', (evt) => {
   info(evt.target)
})