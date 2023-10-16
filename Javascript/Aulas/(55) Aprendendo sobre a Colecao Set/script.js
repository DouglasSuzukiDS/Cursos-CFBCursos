// (55) Aprendendo sobre a Colecao Set
const caixa = document.querySelector('#caixa')

let musicas = new Set(['musica1', 'musica boa', 'musica10']) // Não permite valores repedidos 

musicas.add('musica muito legal')
musicas.add('musica1')
musicas.add('musica1')
musicas.add('musica10')

musicas.delete('musica1')
musicas.clear() // Limpa toda a coleção

console.log(musicas)

/*musicas.forEach(el => {
   caixa.innerHTML += el + '<br/>'
})*/

for(let m of musicas) {
   console.log(m)
   caixa.innerHTML += m + '<br/>'
}