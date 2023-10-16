// (37) Base para Criar Games - Parte 01

let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

// Jogador
const jogadorDados = {
   vidas: 3,
   energia: 100,
   numeroSprite: 0,
   linhaSprite: 0,
   posX: 0,
   posY: 0,
   velocidade: 5,
   img: 'jogador.png',
   spritesPorLinha: 4,
   spritesPorColuna: 4,
   largura: 200,
   altura: 270,
   larguraFinal: 70,
   alturaFinal: 100,
   dirX: 0,
   dirY: 0,
   esquerda: false,
   direita: false,
   cima: false,
   baixo: false,
   andando: false,
   atrazoSprite: 5,
   maxAtrazoSprite: 5,
   jogadorImg: new Image()
}

// CPU
const cpuDados = {
   vidas: 3,
   energia: 100,
   numeroSprite: 0,
   linhaSprite: 0,
   posX: 800,
   posY: 0,
   velocidade: 5,
   img: 'jogador.png',
   spritesPorLinha: 4,
   spritesPorColuna: 4,
   largura: 200,
   altura: 270,
   larguraFinal: 70,
   alturaFinal: 100,
   dirX: 0,
   dirY: 0,
   esquerda: false,
   direita: false,
   cima: false,
   baixo: false,
   andando: false,
   atrazoSprite: 5,
   maxAtrazoSprite: 5,
   jogadorImg: new Image()
}

// NPC
const npcDados = {
   vidas: 3,
   energia: 100,
   numeroSprite: 0,
   linhaSprite: 0,
   posX: 800,
   posY: 400,
   velocidade: 5,
   img: 'jogador.png',
   spritesPorLinha: 4,
   spritesPorColuna: 4,
   largura: 200,
   altura: 270,
   larguraFinal: 70,
   alturaFinal: 100,
   dirX: 0,
   dirY: 0,
   esquerda: false,
   direita: false,
   cima: false,
   baixo: false,
   andando: false,
   atrazoSprite: 5,
   maxAtrazoSprite: 5,
   jogadorImg: new Image()
}

// Função de Desenhar Genérica
const desenhar = (ctx, dados) => {
   dados.jogadorImg.src = dados.img

   // Controle para não sair da tela
   if(dados.posX < 0) {
      dados.posX = 0
   }

   if(dados.posX > ctx.canvas.width - dados.larguraFinal) {
      dados.posX = ctx.canvas.width - dados.larguraFinal
   }

   if(dados.posY < 0) {
      dados.posY = 0
   }

   if(dados.posY > ctx.canvas.height - dados.alturaFinal) {
      dados.posY = ctx.canvas.height - dados.alturaFinal
   }

   // Controle de Movimentação
   dados.posX += dados.dirX * dados.velocidade
   dados.posY += dados.dirY * dados.velocidade

   // Definição da Linha da Tabela de Sprite
   if(dados.esquerda) dados.linhaSprite = 2
   if(dados.direita) dados.linhaSprite = 3
   if(dados.cima) dados.linhaSprite = 1
   if(dados.baixo) dados.linhaSprite = 0

   // ctx.drawImage(imagem, inicioX, inicioY, largura, altura, destinoX, destinoY, larguraFinal, alturaFinal)
   ctx.drawImage(dados.jogadorImg, (dados.jogadorImg.width / dados.spritesPorLinha) * dados.numeroSprite, (dados.jogadorImg.height / dados.spritesPorColuna) * dados.linhaSprite, dados.largura, dados.altura, dados.posX, dados.posY, dados.larguraFinal, dados.alturaFinal)

   // Controle de mudança do Sprite
   if(dados.andando) {
      if(dados.atrazoSprite > 0) {
         dados.atrazoSprite--
      } else {
         dados.atrazoSprite = dados.maxAtrazoSprite
         if(dados.numeroSprite < dados.spritesPorColuna - 1) {
            dados.numeroSprite++
         } else {
            dados.numeroSprite = 0
         }
      } 
   } else {
      dados.numeroSprite = 0
   }

   
}

// Eventos de Teclado
window.addEventListener('keydown', (event) => {
   if(event.keyCode == 37) { // Esquerda
      jogadorDados.dirX = -1
      jogadorDados.esquerda = true
      jogadorDados.andando = true
   } else if(event.keyCode == 39) { // Direita
      jogadorDados.dirX = 1
      jogadorDados.direita = true
      jogadorDados.andando = true
   } else if(event.keyCode == 38) { // CIma
      jogadorDados.dirY = -1
      jogadorDados.cima = true
      jogadorDados.andando = true
   } else if(event.keyCode == 40) { // Esquerda
      jogadorDados.dirY = 1
      jogadorDados.baixo = true
      jogadorDados.andando = true
   }
})

window.addEventListener('keyup', (event) => {
   if(event.keyCode == 37) { // Esquerda
      jogadorDados.dirX = 0
      jogadorDados.esquerda = false
      jogadorDados.andando = false
   } else if(event.keyCode == 39) { // Direita
      jogadorDados.dirX = 0
      jogadorDados.direita = false
      jogadorDados.andando = false
   } else if(event.keyCode == 38) { // CIma
      jogadorDados.dirY = 0
      jogadorDados.cima = false
      jogadorDados.andando = false
   } else if(event.keyCode == 40) { // Esquerda
      jogadorDados.dirY = 0
      jogadorDados.baixo = false
      jogadorDados.andando = false
   }
})

// Função Principal fo Game  
function game(timestamp) {
   ctx.clearRect(0, 0, 1000, 500) 
   desenhar(ctx, jogadorDados)
   desenhar(ctx, cpuDados)
   desenhar(ctx, npcDados)
   window.requestAnimationFrame(game)
}

window.requestAnimationFrame(game)
