// (06) Usando Node.JS no Repl.it. Sem instalar nada no PC 
   // No Repl it

/*const http = require('http')
const porta = process.env.PORT
const servidor = http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type': 'text-plain'})
   res.write('CFB Cursos')
   res.end()
})

servidor.listen(porta, () => { console.log('Rodando') })*/

const express = require('express')
const app = express()
const porta = process.env.PORT

app.get('/', (req, res) => {
   res.send('Seja bem vindo')
})

app.listen(porta, () => { console.log('Rodando') })