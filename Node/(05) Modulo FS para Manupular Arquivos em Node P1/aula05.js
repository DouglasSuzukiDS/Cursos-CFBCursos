// (05) Modulo FS para Manupular Arquivos em Node P1
const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const server = http.createServer((req, res) => {
   fs.readFile('site.html', (err, arquivo) => { // Le o arquivo
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(arquivo) // Retorna o arquivo
      return res.end()
   })
})

server.listen(porta || 3000, () => { console.log('Servidor Rodando') } )