let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.lineTo(200, 100)
ctx.quadraticCurveTo(300, -50, 400, 100)
ctx.quadraticCurveTo(500, 250, 600, 100)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.lineTo(200, 200)
ctx.fillStyle = '#F00'
ctx.quadraticCurveTo(300, 150, 200, 300)
ctx.quadraticCurveTo(100, 150, 200, 200)
ctx.stroke()
ctx.fill()
ctx.closePath()