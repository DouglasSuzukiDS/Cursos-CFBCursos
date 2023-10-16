"use strict";
// Curso de Typescript Completo #P25 - Métodos GETTER e SETTER, aprenda o que são e como utilizar
class Conta25 {
    // PRIVATE => Só pode ser acessada na classe pai
    // PROTECTED => Permite acesso na classe pai ou classes filhas e não podem ser acessadas externamente
    // Public: Acessado de qualquer lugar
    // Private: Acessado somente na sua própria classe
    // Protected Acessado na sua própria classe e nas classes filhas
    numero;
    titular;
    saldoConta;
    // constructor(numero: number, titular: string) {
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Numero.: ${this.numero}`);
        // console.log('-----------')
    }
    get saldo() {
        return this.saldoConta;
    }
    set saldo(saldoConta) {
        this.saldoConta = saldoConta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        if (valor <= this.saldoConta) {
            this.saldoConta -= valor;
        }
        else {
            console.log(`Saldo insuficiente`);
        }
    }
}
// const cont1 = new Conta(125456789, 'Nick')
// Quando uma classe herdada não tem construtor, ela herda o construtor da classe pai
class ContaPF25 extends Conta25 {
    cpf;
    constructor(cpf, titular) {
        super(titular); // Sempre se refere a classe pai
        this.cpf = cpf;
        // console.log(`Conta PF Criada: ${this.titular}`)
        // console.log(`Conta PJ Criada: ${super(titular)}`) // Acessar a propriedade no Constructor
        // console.log(`Conta PF Criada: ${titular}`) // Acessar a propriedade no Constructor ela sendo PROTECTED
    }
    info() {
        console.log(`Tipo...: PF`);
        super.info(); // Info da classe Conta
        console.log(`CPF....: ${this.cpf}`);
        console.log('-----------');
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log(`Valor de depósito muito grande para este tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 1000) {
            console.log(`Valor de saque muito grande para este tipo de conta`);
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaPJ25 extends Conta25 {
    cnpj;
    constructor(cnpj, titular) {
        super(titular); // Sempre se refere a classe pai
        this.cnpj = cnpj;
        // console.log(`Conta PJ Criada: ${this.titular}`)
        // console.log(`Conta PJ Criada: ${super(titular)}`) // Acessar a propriedade no Constructor
        // console.log(`Conta PJ Criada: ${titular}`) // Acessar a propriedade no Constructor elas sendo PROTECTED
    }
    info() {
        console.log(`Tipo...: PJ`);
        super.info(); // Info da classe Conta
        console.log(`CNPJ...: ${this.cnpj}`);
        console.log('-----------');
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log(`Valor de depósito muito grande para este tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 10000) {
            console.log(`Valor de saque muito grande para este tipo de conta`);
        }
        else {
            super.saque(valor);
        }
    }
}
const cont125 = new ContaPF25(111, 'Nick');
const cont225 = new ContaPJ25(225333, 'Kaido');
cont125.deposito(800);
cont125.deposito(200);
cont125.deposito(1000);
// cont125.saque(1000)
cont125.saldo = 250;
console.log(cont125.saldo);
