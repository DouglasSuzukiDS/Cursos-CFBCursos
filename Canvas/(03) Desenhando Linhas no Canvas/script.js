function desenho() {
   let px = 50
   let py = 50
   let canvar = document.getElementById('desenho1')
   let ctx = canvar.getContext('2d')
   
   ctx.moveTo(0, 0) // Informa o ponto inicial
   ctx.lineTo(250, 250)
   ctx.lineTo(400, 250)
   ctx.lineTo(400, 100)
   ctx.moveTo(250, 250)
   ctx.lineTo(200, 300)
   ctx.stroke() // Seria o contorno/borda

   //ctx.fill() // Preenche o elemento
   //ctx.fillReact()
   //ctx.clearRect(0, 0, 50, 50) // Seria como apagar, uso de borracha
   
}