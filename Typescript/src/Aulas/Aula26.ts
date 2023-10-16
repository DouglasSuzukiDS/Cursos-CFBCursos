// Aprendendo Classes Abstratas em Typescript - Curso de Typescript Completo #P26

// Abstract: Não pode ser instânciadas, serve como base para outras classes.
abstract class Conta26 {
   // PRIVATE => Só pode ser acessada na classe pai
   // PROTECTED => Permite acesso na classe pai ou classes filhas e não podem ser acessadas externamente

   // Public: Acessado de qualquer lugar
   // Private: Acessado somente na sua própria classe
   // Protected Acessado na sua própria classe e nas classes filhas
   private readonly numero: number
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

   get saldo(): number {
      return this.saldoConta
   }

   set saldo(saldoConta: number) {
      this.saldoConta = saldoConta
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
// const cont1 = new Conta(126456789, 'Nick')

// Quando uma classe herdada não tem construtor, ela herda o construtor da classe pai
class ContaPF26 extends Conta26 { // Herdando
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

class ContaPJ26 extends Conta26 { // Herdando
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

const cont126 = new ContaPF26(111, 'Nick')
const cont226 = new ContaPJ26(226333, 'Kaido')

cont126.deposito(800)
cont126.deposito(200)
cont126.deposito(1000)
// cont126.saque(1000)
cont126.saldo = 260
console.log(cont126.saldo)

