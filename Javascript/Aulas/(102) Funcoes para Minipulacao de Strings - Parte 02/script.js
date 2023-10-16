// (102) Funções para Minipulação de Strings - Parte 02
// let nome = 'Shanks'
let nome = new String('Shanks') // Aqui retorna um OBJ
let nome2 = new String('Shanks') // Aqui retorna um OBJ
let canal = new String('CFBCursos')

console.log(nome)
console.log(typeof nome)

console.log(nome.charAt(0)) // Retorna a posição do caractere na string

console.log(nome.charCodeAt(0)) // Retorna o código do caractere

console.log(nome.charAt(0))

console.log(nome.concat(canal)) // A modifição so funciona no console.log por nao salvar na string
// nome = nome.concat(canal) // Aqui sim salva na string
console.log(nome)

console.log(nome.indexOf('h')) // Procura e informa a posição da 1 ocorrência. Caso NÃO ENCONTRAR ele retorna -1

console.log(nome.lastIndexOf('s')) // Retorna a posição da ultima ocorrência do elemento

console.log(nome.localeCompare(nome2)) // Compara suas strings 
   // 0 => Iguais;  1 => A string comparada é Maior;  -1 => A string comparada é Menor

console.log(nome.replace('S', 's')) // Substitui o caractere por outro

console.log(nome.search('S')) // Pesquise 

console.log(nome.slice(3, 5)) // Faz o corte na string

let arr_nome = nome.split('n')
console.log(arr_nome)