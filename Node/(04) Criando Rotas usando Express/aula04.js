// (04) Criando Rotas usando Express - A
const http = require('http')
const porta = process.env.PORT // Servidor padrão 

const servidor = http.createServer((req, res) => {
   res.statusCode = 200
   res.writeHead(200, {'Content-Type': 'text-plain'})
   res.end('CFB Cursos')
})

servidor.listen(porta || 3000, () => console.log('Servidor Rodando'))