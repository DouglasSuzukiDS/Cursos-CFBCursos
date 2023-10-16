// (106) RegEx - Parte 02

let nome = String('Eutasssssss Kiddddddddd 2023')
let email = 'captainskidd@op.com'
let numeros = '1, 10, 100, 100'

console.log(nome)

console.log(nome.search(/kidd/i)) // i no final diz para nao usar CaseSensitive

console.log(nome.match('d')) // Retorna o valor
console.log(nome.match(/d/g)) // Maneira global
console.log(nome.match(/d/ig)) // Maneira global sem CaseSensitive

console.log(nome.replace(/kidd/i, 'Captain Kidd'))

console.log(nome.match(/[a-m|0-9]/ig)) // Retorna todos os valores com esse padrao
   // De A até M | De 0 até 9

// Meta Caracteres
console.log(nome.match(/\d/ig)) // Retorna apenas os numero
console.log(nome.match(/\s/ig)) // Espaços
console.log(nome.match(/\bK/ig)) // DWord

// Quantificadores
console.log(nome.match(/s+|d+/ig)) // Retorna todas as ocorrencia na msm sentença
console.log(numeros.match(/10/ig)) // Retorna todas as recorrencias
console.log(numeros.match(/10+/ig)) // Retorna as ocorrência com o que foi passado
console.log(numeros.match(/10*/ig)) // Retorna todas as ocorrencias que tenha algo com o informado
console.log(numeros.match(/10?/ig)) // Retorna os retornos de 0 - 1