let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

let tamMax = 40
let tamMin = 10
let maxCirculos = 50
let angIni = 0
let angFin = 0

function desenha() {
   //posX, posY, raio, angIni, angFin, sentido (true-horario / false: anti-horario)
   //(PI / 180) * ang_grau

   /*ctx.fillStyle = '#000'
   ctx.arc(100, 100, 100, (Math.PI / 180) * 0, (Math.PI / 180) * 90, true)
   ctx.fill()
   
   ctx.beginPath() */
   ctx.clearRect(0, 0, 500, 500)
   for(let i = 0; i < maxCirculos; i++) {
      ctx.beginPath()  
      ctx.fillStyle = 'rgb('
         + Math.random() * 250 + ', '
         + Math.random() * 250 + ', ' 
         + Math.random() * 250 
      + ')'

      ctx.arc(Math.random() * 500, Math.random() * 500, Math.random() *  tamMax + tamMin, (Math.PI / 180) * 0, (Math.PI / 180) * 360, true)
      ctx.fill()
   }

   ctx.beginPath()  
   ctx.fillStyle = '#000'

   ctx.arc(250, 250, 100, (Math.PI / 180) * angIni, (Math.PI / 180) * angFin, false)
   ctx.fill()
   
  angFin++
  if(angFin > 360) 
   angFin = 0

   anima = requestAnimationFrame(desenha)
}

desenha()