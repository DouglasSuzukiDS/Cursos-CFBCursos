// Curso de Typescript Completo #P20 Aprendendo sobre P.O.O. #P5 Entendendo HERANÇA em Typescript
class Conta21 {
   numero: number
   titular: string

   // constructor(numero: number, titular: string) {
   constructor(titular: string) {
      this.numero = this.gerarNumeroConta()
      this.titular = titular
   }

   gerarNumeroConta(): number {
      return Math.floor(Math.random() * 100000) + 1
   }
}
// const cont1 = new Conta(123456789, 'Nick')

// Quando uma classe herdada não tem construtor, ela herda o construtor da classe pai
class ContaPF21 extends Conta21 { // Herdando
   cpf: number

   constructor(cpf: number, titular: string) {
      super(titular) // Sempre se refere a classe pai

      this.cpf = cpf
   }
}

class ContaPJ21 extends Conta21 { // Herdando
   cnpj: number

   constructor(cnpj: number, titular: string) {
      super(titular) // Sempre se refere a classe pai

      this.cnpj = cnpj
   }
}

const cont121 = new ContaPF21(111, 'Nick')
const cont221 = new ContaPJ21(222333, 'Kaido')

console.log(cont121.titular)
console.log(cont121.numero)