"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Objeto31 = exports.Coisas = void 0;
const Coisas = ['Corda', 'Pilha', 'Lampada', 'Chave'];
exports.Coisas = Coisas;
class Pessoa31 {
    nome;
    altura;
    constructor(nome, altura) {
        this.nome = nome;
        this.altura = altura;
    }
}
class Objeto31 {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Objeto31 = Objeto31;
exports.default = Pessoa31;
