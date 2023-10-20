// Curso de Typescript Completo #P24 Aprendendo sobre P.O.O. #P9 Entendendo HERANÇA em Typescript #P5
class Conta24 {
   // PRIVATE => Só pode ser acessada na classe pai
   // PROTECTED => Permite acesso na classe pai ou classes filhas e não podem ser acessadas externamente

   // Public: Acessado de qualquer lugar
   // Private: Acessado somente na sua própria classe
   // Protected Acessado na sua própria classe e nas classes filhas
   protected numero: number
   protected titular: string
   private saldoConta: number

   // constructor(numero: number, titular: string) {
   constructor(titular: string) {
      this.numero = this.gerarNumeroConta()
      this.titular = titular
      this.saldoConta = 0
   }

   gerarNumeroConta(): number {
      return Math.floor(Math.random() * 100000) + 1
   }

   info() {
      console.log(`Titular: ${this.titular}`)
      console.log(`Numero.: ${this.numero}`)
      // console.log('-----------')
   }

   public saldo(): number {
      return this.saldoConta
   }

   protected deposito(valor: number) {
      if(valor < 0) {
         console.log(`Valor inválido`)
         return
      }

      this.saldoConta += valor
   }

   protected saque(valor: number) {
      if(valor < 0) {
         console.log(`Valor inválido`)
         return
      }

      if(valor <= this.saldoConta) {
         this.saldoConta -= valor
      } else {
         console.log(`Saldo insuficiente`)
      }
   }
}
// const cont1 = new Conta(124456789, 'Nick')

// Quando uma classe herdada não tem construtor, ela herda o construtor da classe pai
class ContaPF24 extends Conta24 { // Herdando
   cpf: number

   constructor(cpf: number, titular: string) {
      super(titular) // Sempre se refere a classe pai

      this.cpf = cpf
      // console.log(`Conta PF Criada: ${this.titular}`)
      // console.log(`Conta PJ Criada: ${super(titular)}`) // Acessar a propriedade no Constructor
      // console.log(`Conta PF Criada: ${titular}`) // Acessar a propriedade no Constructor ela sendo PROTECTED
   }

   info() {
      console.log(`Tipo...: PF`)
      super.info() // Info da classe Conta
      console.log(`CPF....: ${this.cpf}`)
      console.log('-----------');
   }

   deposito(valor: number) {
      if(valor > 1000) {
         console.log(`Valor de depósito muito grande para este tipo de conta`)
      } else {
         super.deposito(valor)
      }
   }

   saque(valor: number) {
      if(valor > 1000) {
         console.log(`Valor de saque muito grande para este tipo de conta`)
      } else {
         super.saque(valor)
      }
   }
}

class ContaPJ24 extends Conta24 { // Herdando
   cnpj: number

   constructor(cnpj: number, titular: string) {
      super(titular) // Sempre se refere a classe pai

      this.cnpj = cnpj
      // console.log(`Conta PJ Criada: ${this.titular}`)
      // console.log(`Conta PJ Criada: ${super(titular)}`) // Acessar a propriedade no Constructor
      // console.log(`Conta PJ Criada: ${titular}`) // Acessar a propriedade no Constructor elas sendo PROTECTED
   }

   info() {
      console.log(`Tipo...: PJ`)
      super.info() // Info da classe Conta
      console.log(`CNPJ...: ${this.cnpj}`)
      console.log('-----------');
   }

   deposito(valor: number) {
      if(valor > 10000) {
         console.log(`Valor de depósito muito grande para este tipo de conta`)
      } else {
         super.deposito(valor)
      }
   }

   saque(valor: number) {
      if(valor > 10000) {
         console.log(`Valor de saque muito grande para este tipo de conta`)
      } else {
         super.saque(valor)
      }
   }
}

const cont124 = new ContaPF24(111, 'Nick')
const cont224 = new ContaPJ24(224333, 'Kaido')

cont124.deposito(800)
cont124.deposito(200)
cont124.deposito(1000)
cont124.saque(1000)
console.log(cont124.saldo())

// cont224.deposito(10000)
// cont224.deposito(10000)
// cont224.deposito(10000)
// cont224.deposito(10001)
// console.log(cont224.saldo())

// cont124.info()
// cont224.info()
