// (61) Entendendo Sobre Objetos - Parte 05
// Codigo da aula sem o Desafio
/*const Pessoa = { // Todos pontan pro mesmo nome 
   nome: 'Kaido',
   getNome: function() {
      return this.nome
   },
   setNome: function(nome) {
      this.nome = nome
   }
}

const p2 = Pessoa
const p3 = Pessoa

p3.nome = 'Shanks'
p2['nome'] = 'Barba Branca'
Pessoa.setNome('BigMom')

console.log(Pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome) */

const Pessoa = { // Todos pontan pro mesmo nome 
   nome,
   idade,
   getNome: function() {
      return this.nome
   },
   getIdade: function() {
      return this.odade
   },
   setNome: function(nome) {
      this.nome = nome
   },
   setIdade: function(idade) {
      this.idade = idade
   }
}

const p2 = Pessoa
const p3 = Pessoa

p3.nome = 'Shanks'
p2['nome'] = 'Barba Branca'
Pessoa.setNome('BigMom')

console.log(Pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome)