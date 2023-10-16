// (25) Arrow Function Funções Anonimas - Parte 02
// const soma = function(v1, v2) { return v1 + v2 }
const soma = (v1, v2) => {
   let res = v1 + v2
   return res
}
console.log(soma(10, 5))

const nome = n => { return n }
console.log(nome('Shanks'))

const add = n => n + 10
console.log(add(10))
