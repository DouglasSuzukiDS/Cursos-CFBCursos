// (68) Aprendendo sobre Polimorfismo em JS e OO - Objetos - Parte 11

// Poliformismo => É quando um mesmo método tem a capacidade de ter ações diferentes.

class Carro {
   constructor(tipo, estagioTurbo) {
      this.turbo = new Turbo(estagioTurbo)

      if(tipo == 1) {
         this.velMax = 120
         this.nome = 'Normal'
      } else if(tipo == 2) {
         this.velMax = 160
         this.nome = 'Esportivo'
      } else if(tipo == 3) {
         this.velMax = 200
         this.nome = 'Super Esportivo'
      }
      this.velMax += this.turbo.pot
   }

   info() {
      console.log(`Nome..: ${this.nome}`)
      console.log(`VelMax: ${this.velMax}`)
      console.log(`Turbo.: ${this.turbo.pot}`)
      console.log('------------------')
   }
}

class Turbo {
   constructor(e) {
      if(e == 0) {
         this.pot = 0
      } else if(e == 1) {
         this.pot = 50
      } else if(e == 2) {
         this.pot = 75
      } else if(e == 3) {
         this.pot = 100
      }
   }
}

class CarroEspecial extends Carro {
   constructor(estagioTurbo) {
      super(4, estagioTurbo)
      this.tipoInfo = 1
      this.velMax = 300 + this.turbo.pot
      this.nome = 'Carro Especial'
   }

   info() { // Esse info sobrescreve a propriedade Info do Pai
      // super.info() // Aqui chama o Info do Pai

      if(this.tipoInfo == 2) {
         super.info() // Aqui chama o Info do Pai
      } else {
         console.log(`* Nome..: ${this.nome}`)
         console.log(`* VelMax: ${this.velMax}`)
         console.log(`* Turbo.: ${this.turbo.pot}`)
         console.log('------------------')
      }
   }
}

const c1 = new Carro(1, 0)
const c2 = new Carro(1, 1)
const c3 = new CarroEspecial(3)

c1.info()
c2.info()
c3.info()