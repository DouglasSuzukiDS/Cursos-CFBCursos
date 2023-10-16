"use strict";
// Curso de Typescript Completo #P20 Aprendendo sobre P.O.O. #P5 Entendendo HERANÇA em Typescript
class Conta21 {
    numero;
    titular;
    // constructor(numero: number, titular: string) {
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
}
// const cont1 = new Conta(123456789, 'Nick')
// Quando uma classe herdada não tem construtor, ela herda o construtor da classe pai
class ContaPF21 extends Conta21 {
    cpf;
    constructor(cpf, titular) {
        super(titular); // Sempre se refere a classe pai
        this.cpf = cpf;
    }
}
class ContaPJ21 extends Conta21 {
    cnpj;
    constructor(cnpj, titular) {
        super(titular); // Sempre se refere a classe pai
        this.cnpj = cnpj;
    }
}
const cont121 = new ContaPF21(111, 'Nick');
const cont221 = new ContaPJ21(222333, 'Kaido');
console.log(cont121.titular);
console.log(cont121.numero);
