// (35) Função Rotate - Funções de Transformação - Parte 03

let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

ctx.fillStyle = '#00F'
ctx.fillRect(0, 0, 200, 200)

ctx.translate(200, 0)
ctx.rotate(45 * (Math.PI / 180)) // Valor em Radiano
ctx.fillStyle = '#F00'
ctx.fillRect(0, 0, 200, 200)

ctx.rotate(-45 * (Math.PI / 180))
ctx.translate(200, 0)
ctx.fillStyle = '#0F0'
ctx.fillRect(0, 0, 200, 200)