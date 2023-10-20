enum dias {
   domingo = 0,
   segunda = 1,
   terca = 2,
   quarta = 3,
   quinta = 4,
   sexta = 5,
   sabado = 6
}

// console.log(dias.domingo) // 1
// console.log(dias['domingo']) // 1
// console.log(dias[1]) // segunda

const d = new Date()
// console.log(d.getDate())
// console.log(dias[d.getDay()]) 

enum cores {
   branco = '#FFF',
   preto = '#000',
   vermelho = '#F00',
   verde = '#0F0',
   azul = '#00F'
}

console.log(cores.branco) // #FFF
console.log(cores['branco']) // #FFF

enum tipoUsuario {
   USER = 10, 
   ADMIN = 100, 
   SUPER = 1000
}

console.log(tipoUsuario.SUPER) // 1000

const tp: tipoUsuario = tipoUsuario.SUPER
console.log(tp)