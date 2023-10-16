// (30) Gradiente Linear

let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

//gradient1 = ctx.createLinearGradient(0, 0, 300, 300) // x1, y1, x2, y2  // Diagonal left to right
/*gradient1 = ctx.createLinearGradient(0, 0, 0, 300) // top to bottom
gradient1.addColorStop(0, '#F00')
gradient1.addColorStop(1, '#FF0')
ctx.fillStyle = gradient1
ctx.fillRect(0, 0, 300, 300)*/

let px1, px2, py1, py2
px1 = 150
py1 = 150
px2 = 300
py2 = 300
gradient1 = ctx.createLinearGradient(px1, py1, px2, py2)  // x1, y1, x2, y2
gradient1.addColorStop(0, '#F00')
gradient1.addColorStop(1, '#FF0')
ctx.fillStyle = gradient1
ctx.fillRect(px1, py1, px2, py2)
