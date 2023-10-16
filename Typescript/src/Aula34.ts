// Entendendo Namespace + CLASSES em Typescript #P3 - Curso de Typescript Completo #P34
// Namespace => Espaço organizacional

namespace Veiculos34 { 
   enum Cores{'Preto', 'Branco', 'Vermelho', 'Amarelo', 'Azul', 'Prata'}

   abstract class Carro34 {
      private nome: string
      private motor: Motores34.Motor34
      private cor: string
   
      constructor(nome: string, motor: Motores34.Motor34, cor: Cores) {
         this.nome = nome
         this.motor = motor
         this.cor = Cores[cor]
      }

      public ligar() {
         this.motor.liga = true
      }

      public desligar() {
         this.motor.liga = false
      }

      get minhaCor() {
         return this.cor
      }

      get meuNome() {
         return this.nome
      }

      get estouLigado() {
         return this.motor.liga ? 'Sim' : 'Não'
      }

      get minhaPotencia() {
         return this.motor.potencia
      }
   }

   export class CarroEsportivo34 extends Carro34 {
      constructor(nome: string, cor: Cores) {
         super(nome, new Motores34.Motor34(6, 300, new Motores34.Turbo34(100)), 2) // Chama o construtor da classe Carro
      }
   }

   export class CarroPopular34 extends Carro34 {
      constructor(nome: string, cor: Cores) {
         super(nome, new Motores34.Motor34(3, 100), 2) // Chama o construtor da classe Carro
      }
   }

}

namespace Motores34 {
   export class Turbo34 {
      private pot: number

      constructor(pot: number) {
         this.pot = pot
      }

      get potencia() {
         return this.pot
      }
   }

   export class Motor34 {
      private ligado: boolean
      private cilindros: number
      private pot: number
   
      constructor(cilindros: number, pot: number, turbo?: Turbo34) {
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

const carro134 = new Veiculos34.CarroEsportivo34('Rapid', 2)
const carro234 = new Veiculos34.CarroPopular34('Nuuss', 0)

carro134.ligar()
carro234.ligar()
 
console.log(`Nome....: ${ carro134.meuNome }`)
console.log(`Cor.....: ${ carro134.minhaCor }`)
console.log(`Potencia: ${ carro134.minhaPotencia }`)
console.log(`Ligado..: ${ carro134.estouLigado }`)

console.log('----------------')

console.log(`Nome....: ${ carro234.meuNome }`)
console.log(`Cor.....: ${ carro234.minhaCor }`)
console.log(`Potencia: ${ carro234.minhaPotencia }`)
console.log(`Ligado..: ${ carro234.estouLigado }`)