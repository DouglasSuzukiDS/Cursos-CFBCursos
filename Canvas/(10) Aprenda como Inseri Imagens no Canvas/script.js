let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

let nave = new Image()
nave.src = 'nave.png'

let cores = new Image()
cores.src = 'cores.jpg'

/*nave.onload = () => {
   ctx.drawImage(nave, 0, 0)
}*/
nave.addEventListener('load', () => {
   //ctx.drawImage(nave, 0, 0, 100, 100) // image, posx, posY, width, height

   // imagem, xIniRecorte, yIniRecorte, lRecorte, aRecorte (Area de Recorte), posX, posY, lImagem, aImagem (Esses 4 são referentes as imagens)
   // ctx.drawImage(cores, 0, 0, 50, 50, 0, 0, 50, 50)
   // ctx.drawImage(cores, 50, 0, 50, 50, 0, 0, 50, 50)
   // ctx.drawImage(cores, 100, 0, 50, 50, 0, 0, 50, 50)
   ctx.drawImage(cores, 150, 0, 50, 50, 0, 0, 200, 200)
})
