// (69) Aprendendo sobre Abstract em JS e OO - Objetos - Parte 12

// Abstract => É uma classe que não pode ser instânciada, apenas herdada

class CarroPadrao {
   constructor() {
      if(this.constructor === CarroPadrao) {
         throw new TypeError('Está classe não pode ser instânciada')
      }

      if(this.ligar === undefined) {
         throw new TypeError('É obrigatório implementar o método ligar')
      }

      if(this.desligar === undefined) {
         throw new TypeError('É obrigatório implementar o método desligar')
      }

      this.rodas = 4
      this.portas = 4
      this.ligado = false
   }
}

class Carro extends CarroPadrao {
   constructor(tipo, estagioTurbo) {
      super()
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
      console.log(`Nome...: ${this.nome}`)
      console.log(`VelMax.: ${this.velMax}`)
      console.log(`Turbo..: ${this.turbo.pot}`)
      console.log(`Rodas..: ${this.rodas}`)
      console.log(`Portas.: ${this.portas}`)
      console.log(`Ligado.: ${this.ligado}`)
      console.log('------------------')
   }

   ligar() {
      this.ligado = true
   }

   desligar() {
      this.ligado = false
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
// const c4 = new CarroPadrao()

c1.info()
c2.info()
c3.info()