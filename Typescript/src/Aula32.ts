// Entendendo Namespace em Typescript #P1 - Curso de Typescript Completo #P32
// Namespace => Espaço organizacional

namespace Veiculos32 { 
   export class Carro32 {
      nome: string
      motor: Motores32.Motor32
   
      constructor(nome: string) {
         this.nome = nome
         this.motor = new Motores32.Motor32(100)
      }
   }
}

namespace Motores32 {
   class Turbo32 {
      pot: number

      constructor(pot: number) {
         this.pot = pot
      }
   }

   export class Motor32 {
      pot: number
   
      constructor(pot: number) {
         this.pot = pot
      }
   }
}


const c132 = new Veiculos32.Carro32('Rapid')
console.log(c132.nome)
console.log(c132.motor)