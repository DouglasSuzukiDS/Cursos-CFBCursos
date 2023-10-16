class Bola {
   constructor(ctx, jogador) {
      this.ctx = ctx
      this.movendo = false
      this.jogador = jogador 
      this.dirX = -1
      this.dirY = 0
      this.vel = 3
      this.largura = 20
      this.altura = 20
      this.x = (this.ctx.canvas.width / 2) - (this.largura / 2)
      this.y = (this.ctx.canvas.height / 2) - (this.altura / 2)
   }

   iniciar() {
      this.movendo = true
      this.dirY = 0
      //this.dirX = -1
      //this.dirY = ((Math.random() * 10) > 5 ? -1 : 1)
   }

   gerenciar() {
      if(this.movendo) {
         // Movimentação
         this.x += (this.dirX * this.vel)
         this.y += (this.dirY * this.vel)

         // Colisão com bordas laterais
         if(this.x >= (this.ctx.canvas.width - this.largura)) {
            this.dirX = -1
            pj1++
            this.resetarBola()
            this.dirX = -1
         } // Direita

         if(this.x <= 0) { // Esquerda
            this.dirX = 1
            pj2++
            this.resetarBola()
            this.dirX = 1
         } 

         // Colissão com bordas superior e inferior 
         if(this.y >= (this.ctx.canvas.height - this.altura)) {
            this.dirY *= -1
         }

         if(this.y <= 0) {
            this.dirY *= -1
         }

         // Colisão com o Jogador
         if(
            (this.x <= this.jogador.x + this.jogador.largura)
            && (this.x + this.largura >= this.jogador.x) &&
            (  (this.y + this.altura >= this.jogador.y) && 
               (this.y <= this.jogador.y + this.jogador.altura)
            ) 
         ) {
            this.dirX = 1
            this.dirY = (
               (this.y + (this.altura / 2 )) - 
               (this.jogador.y + (this.jogador.altura / 2)) 
            ) / 16
         }
      }
   }

   resetarBola() {
      this.movendo = false
      this.x = (this.ctx.canvas.width / 2) - (this.largura / 2)
      this.y = (this.ctx.canvas.height / 2) - (this.altura / 2)
      // Redefinição dos Jogadores
      jogador.x = 0
      jogador.y = (this.ctx.canvas.height / 2) - (this.jogador.altura / 2)
      cpu.x = (this.ctx.canvas.width - cpu.largura) 
      cpu.y = (this.ctx.canvas.height / 2) - (cpu.altura / 2)
   }

   desenhar() {
      this.gerenciar()
      // this.ctx.drawImage(this.nave, this.x, this.y)
      this.ctx.fillStyle = '#000'
      this.ctx.fillRect(this.x, this.y, this.largura, this.altura)
   }
}