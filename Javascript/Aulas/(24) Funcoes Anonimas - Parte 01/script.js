// (24) Funcoes Anonimas - Parte 01
/*const f = function(v1, v2) {
   return v1 + v2
}
console.log(f(10, 5))*/

/*const f = function(...valores) {
   for(v of valores) {
      res += v
   }
   return v1 + v2
}
console.log(f(10, 5))*/

const f = new Function('v1', 'v2', 'v3', 'return v1 + v2 + v3') // Função Construtor Anônima
console.log(f(10, 5, 15))

  
