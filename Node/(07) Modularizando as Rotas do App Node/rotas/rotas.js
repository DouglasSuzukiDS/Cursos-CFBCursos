// (07) Modularizando as Rotas do App Node - Pagina Utilizada na aula

const express = require('express')
const rotas = express.Router()

let cursosInfo = [
   {'curso': 'node', 'info': 'Curso de Node'},
   {'curso': 'react', 'info': 'Curso de React'},
   {'curso': 'java', 'info': 'Curso de Java'},
   {'curso': 'arduino', 'info': 'Curso de Arduino'}
]

rotas.get('/', (req, res) => {
   res.json({ola: 'Seja bem vindo'})
})

rotas.get('/:cursoId', (req, res) => {
   const curso = req.params.cursoId // Pega o parametro da URL
   const cursoI = cursosInfo.find(i => i.curso == curso) // Verifica se o parametro da url é igual o declarado no array cursosInfo
   if(!cursoI) {
      res.status(404).json(
         {erro: 'Curso não encontrado', cursoPesquisado: curso}
      )
   } else {
      res.status(200).json(cursoI)
   }
})

module.exports = rotas