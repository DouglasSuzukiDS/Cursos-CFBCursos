// (05) Modulo FS para Manupular Arquivos em Node P1 - B 
const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const server = http.createServer((req, res) => {
   fs.appendFile('teste.txt', 'Curso de Node - CFB Cursos', (err) => { 
      // Cria o arquivo se não existir;
      // Escreve dentro do arquivo depois de acessar a url
      if(err) throw err
      console.log('Arquivo Criando')
      res.end()
   })
})

server.listen(porta || 3000, () => { console.log('Servidor Rodando') } )