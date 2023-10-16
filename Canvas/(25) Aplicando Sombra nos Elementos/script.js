let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
ctx.shadowOffsetX = 10 // Relação da sombra ao objeto
ctx.shadowOffsetY = 10
ctx.shadowBlur = 10 

ctx.fillStyle = '#F00'
ctx.fillRect(100, 100, 200, 200)

ctx.shadowColor = 'rgba(0, 0, 0, 0)'
ctx.fillStyle = '#00F'
ctx.fillRect(400, 100, 200, 200)

ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
ctx.shadowOffsetX = -10 // Relação da sombra ao objeto
ctx.shadowOffsetY = 10
ctx.shadowBlur = 10 
ctx.fillStyle = '#0F0'
ctx.fillRect(700, 100, 200, 200)