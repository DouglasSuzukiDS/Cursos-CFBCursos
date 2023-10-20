// Curso de Typescript Completo #P22 Aprendendo sobre P.O.O. #P7 Entendendo HERANÇA em Typescript #P3
class Conta22 {
   // PRIVATE => Só pode ser acessada na classe pai
   // PROTECTED => Permite acesso na classe pai ou classes filhas e não podem ser acessadas externamente
   protected numero: number
   protected titular: string

   // constructor(numero: number, titular: string) {
   constructor(titular: string) {
      this.numero = this.gerarNumeroConta()
      this.titular = titular
   }

   gerarNumeroConta(): number {
      return Math.floor(Math.random() * 100000) + 1
   }

   info() {
      console.log(`Titular: ${this.titular}`)
      console.log(`Numero.: ${this.numero}`)
      console.log('-----------')
   }
}
// const cont1 = new Conta(123456789, 'Nick')

// Quando uma classe herdada não tem construtor, ela herda o construtor da classe pai
class ContaPF22 extends Conta22 { // Herdando
   cpf: number

   constructor(cpf: number, titular: string) {
      super(titular) // Sempre se refere a classe pai

      this.cpf = cpf
      // console.log(`Conta PF Criada: ${this.titular}`)
      // console.log(`Conta PJ Criada: ${super(titular)}`) // Acessar a propriedade no Constructor
      console.log(`Conta PF Criada: ${titular}`) // Acessar a propriedade no Constructor ela sendo PROTECTED
   }
}

class ContaPJ22 extends Conta22 { // Herdando
   cnpj: number

   constructor(cnpj: number, titular: string) {
      super(titular) // Sempre se refere a classe pai

      this.cnpj = cnpj
      // console.log(`Conta PJ Criada: ${this.titular}`)
      // console.log(`Conta PJ Criada: ${super(titular)}`) // Acessar a propriedade no Constructor
      console.log(`Conta PJ Criada: ${titular}`) // Acessar a propriedade no Constructor elas sendo PROTECTED

   }
}

const cont122 = new ContaPF22(111, 'Nick')
const cont222 = new ContaPJ22(222333, 'Kaido')

cont122.info()
cont222.info()
