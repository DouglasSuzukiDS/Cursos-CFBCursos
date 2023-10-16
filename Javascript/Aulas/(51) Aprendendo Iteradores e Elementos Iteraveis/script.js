// (51) Aprendendo Iteradores e Elementos Iteraveis
const valores = [10, 8, 9, 2]
const it_valores = valores[Symbol.iterator]() // Transforma em algo iteravel
// console.log(valores)
// console.log(it_valores.next().value) 
// console.log(it_valores.next()) 
// console.log(it_valores.next()) 
// console.log(it_valores.next()) 
// console.log(it_valores.next()) 

const texto = 'Youtube'
const it_texto = texto[Symbol.iterator]()
console.log(texto)
console.log(it_texto.next()) 
console.log(it_texto.next()) 
console.log(it_texto.next()) 
console.log(it_texto.next()) 
console.log(it_texto.next()) 
console.log(it_texto.next()) 
console.log(it_texto.next()) 
console.log(it_texto.next()) 