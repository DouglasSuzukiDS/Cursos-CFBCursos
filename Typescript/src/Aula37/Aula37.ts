// Entendendo o modificador STATIC de POO em Typescript - Curso de Typescript Completo #P37

// Static => Não precisa instanciar. Salva na memoria e faz a referencia a ela quando usada. Seria como uma 'váriavel global' 
import { Globais } from "./Globais"

console.log(Globais.teste)

Globais.teste = 10
console.log(Globais.teste)