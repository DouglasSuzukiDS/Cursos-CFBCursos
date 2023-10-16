let px = 50
let anima
function desenha() {
   let canvar = document.getElementById('desenho1')
   let ctx = canvar.getContext('2d')
   ctx.clearRect(0, 0, 500, 500)

   ctx.fillStyle = '#F00'
   ctx.fillRect(px, 0, 50, 50)

   px++
   anima = requestAnimationFrame(desenha)
}