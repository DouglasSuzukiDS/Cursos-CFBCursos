const express = require('express')
const app = express()
const porta = process.env.PORT

app.get('/', (req, res) => {
   res.send('')
})

app.listen(porta, () => { console.log('Rodando') })