// (105) RegEx - Parte 01

let nome = String('Eutass Kidd')
console.log(nome)

console.log(nome.search(/kidd/i)) // i no final diz para nao usar CaseSensitive

console.log(nome.match('d')) // Retorna o valor
console.log(nome.match(/d/g)) // Maneira global
console.log(nome.match(/d/ig)) // Maneira global sem CaseSensitive

console.log(nome.replace(/kidd/i, 'Captain Kidd'))