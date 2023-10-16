"use strict";
// Entendendo Namespace + CLASSES em Typescript #P3 - Curso de Typescript Completo #P34
// Namespace => Espaço organizacional
var Veiculos34;
(function (Veiculos34) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Amarelo"] = 3] = "Amarelo";
        Cores[Cores["Azul"] = 4] = "Azul";
        Cores[Cores["Prata"] = 5] = "Prata";
    })(Cores || (Cores = {}));
    class Carro34 {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get estouLigado() {
            return this.motor.liga ? 'Sim' : 'Não';
        }
        get minhaPotencia() {
            return this.motor.potencia;
        }
    }
    class CarroEsportivo34 extends Carro34 {
        constructor(nome, cor) {
            super(nome, new Motores34.Motor34(6, 300, new Motores34.Turbo34(100)), 2); // Chama o construtor da classe Carro
        }
    }
    Veiculos34.CarroEsportivo34 = CarroEsportivo34;
    class CarroPopular34 extends Carro34 {
        constructor(nome, cor) {
            super(nome, new Motores34.Motor34(3, 100), 2); // Chama o construtor da classe Carro
        }
    }
    Veiculos34.CarroPopular34 = CarroPopular34;
})(Veiculos34 || (Veiculos34 = {}));
var Motores34;
(function (Motores34) {
    class Turbo34 {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores34.Turbo34 = Turbo34;
    class Motor34 {
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
    Motores34.Motor34 = Motor34;
})(Motores34 || (Motores34 = {}));
const carro134 = new Veiculos34.CarroEsportivo34('Rapid', 2);
const carro234 = new Veiculos34.CarroPopular34('Nuuss', 0);
carro134.ligar();
carro234.ligar();
console.log(`Nome....: ${carro134.meuNome}`);
console.log(`Cor.....: ${carro134.minhaCor}`);
console.log(`Potencia: ${carro134.minhaPotencia}`);
console.log(`Ligado..: ${carro134.estouLigado}`);
console.log('----------------');
console.log(`Nome....: ${carro234.meuNome}`);
console.log(`Cor.....: ${carro234.minhaCor}`);
console.log(`Potencia: ${carro234.minhaPotencia}`);
console.log(`Ligado..: ${carro234.estouLigado}`);
