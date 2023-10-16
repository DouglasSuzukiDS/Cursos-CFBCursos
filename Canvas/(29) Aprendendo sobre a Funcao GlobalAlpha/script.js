let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

ctx.fillStyle = '#00F'
ctx.fillRect(150, 150, 100, 100)

ctx.globalAlpha = '.5'
ctx.fillStyle = '#F00'
ctx.fillRect(100, 100, 100, 100)
ctx.fillRect(300, 100, 100, 100)

ctx.globalAlpha = '1'
ctx.fillStyle = '#0F0'
ctx.fillRect(500, 100, 100, 100)
ctx.fillRect(700, 100, 100, 100)