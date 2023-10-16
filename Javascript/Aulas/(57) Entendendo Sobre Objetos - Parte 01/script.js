// (57) Entendendo Sobre Objetos - Parte 01
class Pessoa {
   constructor(pnome) {
      // this.nome = 'Kaido' // Sem Parametros
      this.nome = pnome
   }
}

// let p1 = new Pessoa() // Sem parametro
let p1 = new Pessoa('Kaido')
let p2 = new Pessoa('Shanks')
let p3 = new Pessoa('BigMom')
console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)