let canvas = document.getElementById("desenho1")
let ctx = canvas.getContext('2d')

let canal = 'CFB Cursos'
let nome = 'Kaido'


ctx.font = '30px arial'
ctx.fillStyle = "#008"
ctx.strokeText(canal, 10, 100)
ctx.fillText(nome, 10, 200, 100) // Texto, posX, posY, Largura