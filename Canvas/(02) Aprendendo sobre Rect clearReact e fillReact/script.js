function desenho() {
   let px = 50
   let py = 50
   let canvar = document.getElementById('desenho1')
   let ctx = canvar.getContext('2d')
   
   ctx.fillStyle = '#00F' // Preenchimento
   ctx.rect(px, py, 200, 200) // Retangulo preenchido com a cor do fillStyle
   ctx.fill() // Preenche o elemento

   //ctx.clearRect(0, 0, 50, 50) // Seria como apagar, uso de borracha
   
}