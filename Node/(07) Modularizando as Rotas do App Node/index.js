// (07) Modularizando as Rotas do App Node - Necessita do arquivo rotas

const express = require('express')
const rotas = require('./rotas/rotas')
const porta = process.env.PORT || 3000

const app = express()

app.use('/', rotas)

app.get('*', (req, res) => {
   res.send('CFB Cursos')
})

app.listen(porta, () => { console.log('Rodando') })