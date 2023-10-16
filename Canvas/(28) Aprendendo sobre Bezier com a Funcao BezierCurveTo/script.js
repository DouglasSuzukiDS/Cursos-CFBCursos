let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

ctx.beginPath()

ctx.lineTo(300, 100)

/*ctx.moveTo(300, 0)
ctx.bezierCurveTo(100, 150, 500, 250, 300, 400)*/

ctx.moveTo(400, 150)
ctx.bezierCurveTo(500, 0, 800, 200, 400, 500)
ctx.bezierCurveTo(0, 200, 300, 0, 400, 150)

ctx.stroke()
ctx.closePath()