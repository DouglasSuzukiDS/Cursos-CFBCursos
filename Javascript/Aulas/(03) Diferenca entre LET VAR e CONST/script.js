// (03) Diferença entre LET, VAR e CONST

'use strict' // Modo estrito

// var   => Escopo global
// let   => Somente no bloco onde foi declarado
// const => Valor que nao pode ser alterado

function teste() {
   let nome = 'Kaido'
   if(true) {
      console.log('Dentro do IF do teste: ' + nome)
   }
   console.log('Dentro de teste: ' + nome)
}

//teste()
//console.log('Fora do teste: ' + nome)

let nome = 'Kaido'
nome = 'CFB Cursos'
nome = 10
console.log(nome)

const curso = 'Javascript'
console.log(curso)


