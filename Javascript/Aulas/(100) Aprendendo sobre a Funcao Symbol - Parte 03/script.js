// (100) Aprendendo sobre a Funcao Symbol - Parte 03
const nome = Symbol('nome')
const numero = Symbol('numero')
const corUniforme = Symbol('cor do uniforme')

const Jogador = {
   [nome]: 'j1'
}

Jogador[numero] = 10,
Jogador[corUniforme] = 'amarelo'

for(p in Jogador) {
   console.log(p)
}

// console.log(nome.description)
console.log(Jogador)
console.log(Jogador.nome)
console.log(Jogador[numero])
console.log(Jogador[corUniforme])