// (99) Aprendendo sobre a Funcao Symbol - Parte 02
class Jogador {
   constructor(nome) { 
      this.nome = nome
      this.id = Symbol() 
   }
}

let jogadores = [ new Jogador('j1'), new Jogador('j2'), new Jogador('j3'), new Jogador('j4'), new Jogador('j1'), new Jogador('j3')]

let s1 = jogadores[0].id
let s = []

/*jogadores = jogadores.filter((j) => {
   return j.id != s1
})*/

/*jogadores = jogadores.filter((j) => {
   return j.nome != 'j1'
})*/
console.log(jogadores)

let s_jogadores = jogadores = jogadores.filter((j) => {
   return j.nome == 'j1'
})

s = s_jogadores.map((j) => {
   return j.id
})

console.log(s_jogadores)
console.log(s)