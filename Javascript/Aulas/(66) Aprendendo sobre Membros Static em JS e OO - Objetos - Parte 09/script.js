// (66) Aprendendo sobre Membros Static em JS e OO - Objetos - Parte 09

class Npc { 
   static slerta = false // Como se fosse uma variavel da classe
   constructor(energia) {
      this.energia = energia
      //this.alerta = false
   }

   info = function() {
      console.log(`Energia: ${this.energia}`)
      console.log(`Alerta: ${(Npc.alerta ? 'Sim' : 'Não')}`)
      console.log('----------')
   }

   static alertar = function() {
      Npc.alerta = true
   }
}

Npc.alertar()

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

// Npc.alerta = true // Modifica a 'variavel da classe' 

npc1.info()
npc2.info()
npc3.info()