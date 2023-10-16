// (31) Gradiente Radial

let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

//gradient1 = ctx.createLinearGradient(0, 0, 300, 300) // x1, y1, x2, y2  // Diagonal left to right
/*gradient1 = ctx.createLinearGradient(0, 0, 0, 300) // top to bottom
gradient1.addColorStop(0, '#F00')
gradient1.addColorStop(1, '#FF0')
ctx.fillStyle = gradient1
ctx.fillRect(0, 0, 300, 300)*/


gradient1 = ctx.createRadialGradient(30, 30, 5, 100, 100, 300) // x1, y1, r1, x2, y2, r2
gradient1.addColorStop(0, '#00F')
gradient1.addColorStop(1, '#FF0')
ctx.fillStyle = gradient1
ctx.fillRect(0, 0, 300, 300)
