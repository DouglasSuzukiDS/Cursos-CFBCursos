let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

ctx.beginPath()

ctx.lineTo(300, 100)

// ctx.fillStyle = '#F00'
ctx.quadraticCurveTo(400, 0, 500, 100)
ctx.quadraticCurveTo(600, 200, 500, 320)
ctx.quadraticCurveTo(420, 420, 300, 500)

ctx.quadraticCurveTo(180, 420, 100, 320)
ctx.quadraticCurveTo(0, 200, 100, 100)
ctx.quadraticCurveTo(200, 0, 300, 100)

ctx.stroke()
// ctx.fill()
ctx.closePath()