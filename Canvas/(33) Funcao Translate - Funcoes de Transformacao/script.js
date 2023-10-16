// (33) Função Translate - Funcoes de Transformação

let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

ctx.fillStyle = '#00F'
ctx.fillRect(0, 0, 200, 200)

ctx.translate(100, 100) // Informa a nova localização para os elementos serem inseridos, a nova posicição inicial para o canvas

ctx.fillStyle = '#F00'
ctx.fillRect(0, 0, 200, 200)

ctx.translate(100, 100)

ctx.fillStyle = '#0F0'
ctx.fillRect(0, 0, 200, 200)