let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

/*let cores = new Image()
cores.src = 'cores.jpg'
let numSprite = 0
let limagem = 0
let posIniX = 0
let larguraSprite = 0
let numSprites = 4

cores.addEventListener('load', () => {
   // imagem, xIniRecorte, yIniRecorte, lRecorte, aRecorte (Area de Recorte), posX, posY, lImagem, aImagem (Esses 4 são referentes as imagens)
   limagem = cores.width
   larguraSprite = limagem / numSprites
   posIniX = larguraSprite * numSprite
   ctx.drawImage(cores, posIniX, 0, larguraSprite, 50, 0, 0, 200, 200)
})

let anima = setInterval(() => {
   numSprite++
   if(numSprite > 3) {
      numSprite = 0
   }
   posIniX = larguraSprite * numSprite

   ctx.drawImage(cores, posIniX, 0, larguraSprite, 50, 0, 0, 200, 200)
}, 1000)*/

let jogador = new Image()
jogador.src = 'jogador.png'
let numSprite = 0
let posIniX = 0
let limagem = 0
let larguraSprite = 0
let numSprites = 4
let posX = 0
let posY = 0
let velocidade = 2

jogador.addEventListener('load', () => {
   // limagem = jogador.width
   // larguraSprite = limagem / numSprites
   larguraSprite = jogador.width / numSprites
   altSprite = jogador.height / numSprites
   posIniX = larguraSprite * numSprite

   // imagem, xIniRecorte, yIniRecorte, lRecorte, aRecorte (Area de Recorte), posX, posY, lImagem, aImagem (Esses 4 são referentes as imagens)
   ctx.drawImage(jogador, posIniX, 0, larguraSprite, altSprite, posX, posY, larguraSprite, altSprite)
})

let anima = setInterval(() => {
   ctx.clearRect(0,0, 500, 500)
   numSprite++
   if(numSprite > 3) {
      numSprite = 0
   }
   posIniX = larguraSprite * numSprite

   ctx.drawImage(jogador, posIniX, 0, larguraSprite, altSprite, posX, posY, larguraSprite, altSprite)
}, 200)

window.addEventListener('keydown', (event) => {
   if(event.keyCode == 37) { // Esquerda
      posX -= velocidade
   } else if(event.keyCode == 39) { // Direita
      posX += velocidade
   } else if(event.keyCode == 38) { // Cima
      posY -= velocidade
   } else if(event.keyCode == 40) { // Baixo
      posY += velocidade
   }
})
