// Curso de Typescript Completo #P20 Aprendendo sobre P.O.O. #P5 Entendendo HERANÇA em Typescript
class Conta {
   numero: number
   titular: string

   constructor(numero: number, titular: string) {
      this.numero = numero
      this.titular = titular
   }
}
// const cont1 = new Conta(123456789, 'Nick')


class ContaPF extends Conta { // Herdando

}

class ContaPJ extends Conta { // Herdando

}

const cont1 = new ContaPF(123456789, 'Nick')
const cont2 = new ContaPJ(112233440, 'Kaido')

console.log(cont1.titular)
console.log(cont2.titular)