"use strict";
// Aprendendo mais sobre INTERFACE #P2 em Typescript - Curso de Typescript Completo #P28
let curso281;
let curso282;
let curso283;
curso281 = {
    titulo: 'Typescript',
    desc: 'Curso de Typescript',
    aulas: 100,
    maxAlunos: 50
};
curso282 = {
    titulo: 'Javacript',
    desc: 'Curso de Javacript',
    aulas: 200,
    maxAlunos: 80
};
curso283 = {
    titulo: 'C++',
    desc: 'Curso de Javacript',
    aulas: 200,
    // maxAlunos: 100
};
class Conta28 {
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
// const cont1 = new Conta(126456789, 'Nick')
// Quando uma classe herdada não tem construtor, ela herda o construtor da classe pai
class ContaPF28 extends Conta26 {
    taxaCalculo = 10;
    cpf;
    constructor(cpf, titular) {
        super(titular); // Sempre se refere a classe pai
        this.cpf = cpf;
        // console.log(`Conta PF Criada: ${this.titular}`)
        // console.log(`Conta PJ Criada: ${super(titular)}`) // Acessar a propriedade no Constructor
        // console.log(`Conta PF Criada: ${titular}`) // Acessar a propriedade no Constructor ela sendo PROTECTED
    }
    CalcularTrib(valor) {
        return valor * this.taxaCalculo;
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
console.log(curso281);
console.log(curso282);
console.log(curso283);
