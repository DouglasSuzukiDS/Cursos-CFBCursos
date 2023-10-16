// (112) Aprendendo sobre a Função getBoundingClientRect()

let q1 = document.getElementById('q1')
let q2 = document.getElementById('q2')
let posX = document.getElementById('posx')
let posY = document.getElementById('posy')
let altura = document.getElementById('altura')
let largura = document.getElementById('largura')

// console.log(q1.getBoundingClientRect())

// let DOMRect_q1 = q1.getBoundingClientRect() // Retorna os dados do elemento
// posX.innerHTML = `posX: ${DOMRect_q1.x}`
// posY.innerHTML = `posY: ${DOMRect_q1.y}`
// largura.innerHTML = `Largura: ${DOMRect_q1.width}`
// altura.innerHTML = `Altura: ${DOMRect_q1.height}`

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