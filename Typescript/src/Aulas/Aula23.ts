// Curso de Typescript Completo #P23 Aprendendo sobre P.O.O. #P7 Entendendo HERANÇA em Typescript #P4
class Conta23 {
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
      this.saldoConta += valor
   }

   protected saque(valor: number) {
      if(valor >= this.saldoConta) {
         this.saldoConta -= valor
      } else {
         console.log(`Saldo insuficiente`)
      }
   }
}
// const cont1 = new Conta(123456789, 'Nick')

// Quando uma classe herdada não tem construtor, ela herda o construtor da classe pai
class ContaPF23 extends Conta23 { // Herdando
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
}

class ContaPJ23 extends Conta23 { // Herdando
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
}

const cont123 = new ContaPF23(111, 'Nick')
const cont223 = new ContaPJ23(223333, 'Kaido')

cont123.deposito(800)
cont123.deposito(200)
cont123.deposito(1000)
console.log(cont123.saldo())

cont223.deposito(10000)
cont223.deposito(10000)
cont223.deposito(10000)
cont223.deposito(10001)
console.log(cont223.saldo())

// cont123.info()
// cont223.info()
