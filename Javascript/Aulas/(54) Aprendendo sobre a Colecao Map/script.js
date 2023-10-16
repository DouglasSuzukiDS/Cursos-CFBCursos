// (54) Aprendendo sobre a Colecao Map
const caixa = document.querySelector('#caixa')

let mapa = new Map()

mapa.set('curso', 'Javascript')
mapa.set(10, 'CFB Cursos')
mapa.set(1, 100)
mapa.set('canal', 100)

mapa.delete(1)

console.log(mapa)

// Get => Obtem o valor da chave
// Has => Verifica se a chave existe
// Size => Informa o tamanho da coleção
// Delete => Delete o elemento na chave

//caixa.innerHTML = mapa.get('curso')
/*if(mapa.has('canal')) { 
   caixa.innerHTML = 'A chave existe na coleção'
} else {
   caixa.innerHTML = 'A chave não está na coleção'
}*/

let pes = "teste"
let res = ''
if(mapa.has(pes)) { 
   res = 'A chave existe na coleção com o valor: ' + mapa.get(pes)
} else {
   res = 'A chave não está na coleção'
}
res += '<br/> o tamanho da coleção é: ' + mapa.size
caixa.innerHTML = res

mapa.forEach((el) => {
   console.log(el)
})