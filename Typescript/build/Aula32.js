"use strict";
// Entendendo Namespace em Typescript #P1 - Curso de Typescript Completo #P32
// Namespace => Espaço organizacional
var Veiculos32;
(function (Veiculos32) {
    class Carro32 {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores32.Motor32(100);
        }
    }
    Veiculos32.Carro32 = Carro32;
})(Veiculos32 || (Veiculos32 = {}));
var Motores32;
(function (Motores32) {
    class Turbo32 {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    class Motor32 {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    Motores32.Motor32 = Motor32;
})(Motores32 || (Motores32 = {}));
const c132 = new Veiculos32.Carro32('Rapid');
console.log(c132.nome);
console.log(c132.motor);
