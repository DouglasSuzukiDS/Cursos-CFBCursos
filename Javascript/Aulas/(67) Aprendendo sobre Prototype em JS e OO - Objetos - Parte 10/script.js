// (67) Aprendendo sobre Prototype em JS e OO - Objetos - Parte 10

// Prototype => Permite adicionar propriedades ou métodos há uma classe depois dela ser instânciada 

const Nave = function(energia) {
   this.energia = energia
   this.disparos = 100
}

const n1 = new Nave(100)

Nave.prototype.vidas = 3
Nave.prototype.disparar = function() {
   if(this.disparos > 0) {
      this.disparos--
   }
}

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()

console.log(Nave)
console.log(n1)
console.log(n1.energia)
console.log(n1.vidas)
console.log(n1.disparos)
