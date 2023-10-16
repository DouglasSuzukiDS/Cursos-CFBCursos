// (13) Comando Condicional IF e IF Else
let num = 40

if(num > 10) {
   console.log('Numero maior que 10')
   if(num > 50) {
      console.log('Numero maior que 50')
   }
} else if(num > 5){
   console.log('Numero esta entre 6 e 10')
} else {
   console.log('Numero menor ou igual a 5')
}

let energia = 100
let clima = 'sol'

if(energia > 70 && clima == 'sol') {
   console.log('Vou a praia')
} else {
   console.log('Vou ao cinema')
}

console.log('Fim do programa')
