// Aprendendo mais sobre INTERFACE #P2 em Typescript - Curso de Typescript Completo #P28

interface curso281 {
   titulo: string
   desc: string
   inciarCurso?(teste: string): void
}

interface cursoProg extends curso281 {
   aulas: number
   maxAlunos?: number
}

interface cursoArtes extends curso281 {
   aulas: number
   maxAlunos?: number
}

let curso281: cursoProg
let curso282: cursoProg
let curso283: cursoArtes

curso281 = {
   titulo: 'Typescript',
   desc: 'Curso de Typescript',
   aulas: 100,
   maxAlunos: 50
}

curso282 = {
   titulo: 'Javacript',
   desc: 'Curso de Javacript',
   aulas: 200,
   maxAlunos: 80
}

curso283 = {
   titulo: 'C++',
   desc: 'Curso de Javacript',
   aulas: 200,
   // maxAlunos: 100
}

interface Tributo {
   taxaCalculo: number
   CalcularTrib(valor: number): number
}

class Conta28 {
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
class ContaPF28 extends Conta26 implements Tributo { // Herdando
   taxaCalculo = 10
   cpf: number

   constructor(cpf: number, titular: string) {
      super(titular) // Sempre se refere a classe pai

      this.cpf = cpf
      // console.log(`Conta PF Criada: ${this.titular}`)
      // console.log(`Conta PJ Criada: ${super(titular)}`) // Acessar a propriedade no Constructor
      // console.log(`Conta PF Criada: ${titular}`) // Acessar a propriedade no Constructor ela sendo PROTECTED
   }

   CalcularTrib(valor: number): number {
      return valor * this.taxaCalculo
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




console.log(curso281)
console.log(curso282)
console.log(curso283)