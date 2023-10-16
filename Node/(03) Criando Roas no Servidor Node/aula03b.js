// (03) Criando Rotas no Servidor Node - B
const http = require('http')
const url = require('url')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type': 'text/html'})
   res.write(req.url) // Imprime a URL
   const p = url.parse(req.url,true).query // Permite a passagem de parametros pela URL  //http://localhost:3000/curso/node?nome=Kaido&curso=Curso+de+Node
   res.write('<br/>' + p.nome) 
   res.write('<br/>' +p.curso)

   res.end()
})

// Node NomeArquivo roda o servidor
servidor.listen(porta, host, () => console.log('Servidor Rodando'))