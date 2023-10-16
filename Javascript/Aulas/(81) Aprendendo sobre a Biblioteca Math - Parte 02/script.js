// (81) Aprendendo sobre a Biblioteca Math - Parte 02

const olhos = [...document.getElementsByClassName('olho')]

let posx_mouse = 0
let posy_mouse = 0

window.addEventListener('mousemove', (evt) => {
   posx_mouse = evt.clientX
   posy_mouse = evt.clientY

   //const rot = Math.atan2(posy_mouse, posx_mouse) // Retorna o Arco Tangente de 2 Coeficientes

   const rot = Math.atan2(posy_mouse, posx_mouse) * 180 / Math.PI // Aqui transforma Radianos em graus

   olhos.forEach((o) => {
      o.style.transform = "rotate(" + rot + "deg)"
   })
})

// olhos[0].style.transform = 'rotate(90deg)'

