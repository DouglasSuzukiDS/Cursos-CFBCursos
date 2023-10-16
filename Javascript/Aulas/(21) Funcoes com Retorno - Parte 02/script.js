// (21) Funcoes com Retorno - Parte 02

function canal() {
   // console.log('CFB Cursos')
   // return 'CFB Cursos'

   let n1 = 10
   let n2 = 2
   let res = n1 * n2
   //return res 

   if(res % 2 == 0) {
      return 'Par'
   } else {
      return 'Impar'
   }
}

let num = canal()
let res = canal()

// canal() // Não retorna nada visível
// console.log(canal()) // Retorna no console, aquele que chamou
// console.log(num)
console.log(res)