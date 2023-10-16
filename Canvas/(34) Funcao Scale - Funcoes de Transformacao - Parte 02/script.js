// (34) Função Scale - Funções de Transformação - Parte 02

let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

ctx.fillStyle = '#00F'
ctx.fillRect(0, 0, 200, 200)

ctx.translate(200, 0)
ctx.scale(2, 2)
ctx.fillStyle = '#F00'
ctx.fillRect(0, 0, 200, 200)

ctx.translate(200, 0)
ctx.scale(0.5, 0.5)
ctx.fillStyle = '#0F0'
ctx.fillRect(0, 0, 200, 200)