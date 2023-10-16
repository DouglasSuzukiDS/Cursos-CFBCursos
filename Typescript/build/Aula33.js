"use strict";
// Entendendo Namespace em Typescript #P2 - Curso de Typescript Completo #P33
// Namespace => Espaço organizacional
var Veiculos33;
(function (Veiculos33) {
    class Carro33 {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores33.Motor33(3, 100);
        }
    }
    Veiculos33.Carro33 = Carro33;
})(Veiculos33 || (Veiculos33 = {}));
var Motores33;
(function (Motores33) {
    class Turbo33 {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        get potencia() {
            return this.pot;
        }
    }
    class Motor33 {
        ligado;
        cilindros;
        pot;
        constructor(cilindros, pot, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.pot = pot + (turbo ? turbo.potencia : 0);
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get liga() {
            return this.ligado;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores33.Motor33 = Motor33;
})(Motores33 || (Motores33 = {}));
