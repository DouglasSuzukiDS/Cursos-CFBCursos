// (04) Criando Rotas usando Express - B
const express = require('express')
const app = express()
const porta = process.env.PORT // Servidor padrão 

app.get('/', (req, res) => {
   res.send('Seja Bem Vindo')
})

app.get('/canal', (req, res) => {
   res.json({canal: 'CFB Cursos'})
})

app.listen(porta || 3000, () => console.log('Servidor Rodando'))