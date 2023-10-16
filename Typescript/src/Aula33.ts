// Entendendo Namespace em Typescript #P2 - Curso de Typescript Completo #P33
// Namespace => Espaço organizacional

namespace Veiculos33 { 
   export class Carro33 {
      nome: string
      motor: Motores33.Motor33
   
      constructor(nome: string) {
         this.nome = nome
         this.motor = new Motores33.Motor33(3, 100)
      }
   }
}

namespace Motores33 {
   class Turbo33 {
      private pot: number

      constructor(pot: number) {
         this.pot = pot
      }

      get potencia() {
         return this.pot
      }
   }

   export class Motor33 {
      private ligado: boolean
      private cilindros: number
      private pot: number
   
      constructor(cilindros: number, pot: number, turbo?: Turbo33) {
         this.ligado = false
         this.cilindros = cilindros
         this.pot = pot + (turbo ? turbo.potencia : 0)
      }

      set liga(ligado: boolean) {
         this.ligado = ligado
      }

      get liga() {
         return this.ligado
      }

      get potencia() {
         return this.pot
      }
   }
}
