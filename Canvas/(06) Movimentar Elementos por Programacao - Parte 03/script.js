let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')
let dx = 1
let dy = 0
let px = 0
let py = 0
let anima
let l_ret = 50
let a_ret = 50
let l_canvas = 500
let a_canvas = 500

function desenha() {
   ctx.clearRect(0, 0, l_canvas, a_canvas)

   ctx.fillStyle = '#F00'
   ctx.fillRect(px, py, l_ret, a_ret)

   ctx.lineWidth = 3
   ctx.stokeStyle = '#000'
   ctx.strokeRect(px, py, l_ret, a_ret)

   px += dx
   py += dy
   
   if((px <= 0) && (py <=0)) {
      dx = 1
      dy = 0
   }

   if((px + l_ret >= l_canvas) && (py <= 0)) {
      dx = 0
      dy = 1
   }

   if((px + l_ret >= l_canvas) && (py + a_ret >= a_canvas)) {
      dx = -1
      dy = 0
   }

   if((px <= 0) && (py + a_ret >= a_canvas)) {
      dx = 0
      dy = -1
   }

   anima = requestAnimationFrame(desenha)
}

desenha()