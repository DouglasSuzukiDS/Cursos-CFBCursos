"use strict";
// Entendendo o modificador STATIC de POO em Typescript - Curso de Typescript Completo #P37
Object.defineProperty(exports, "__esModule", { value: true });
// Static => Não precisa instanciar. Salva na memoria e faz a referencia a ela quando usada. Seria como uma 'váriavel global' 
const Globais_1 = require("./Globais");
console.log(Globais_1.Globais.teste);
Globais_1.Globais.teste = 10;
console.log(Globais_1.Globais.teste);
