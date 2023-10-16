// (18) Curso de Typescript Completo #P18 Aprendendo sobre P.O.O. #P3 Métodos de classes em Typescript

class Computador18 {
   nome: string
   ram: number
   cpu: number
   ligado: boolean

   constructor(nome: string, ram: number, cpu: number) {
      this.nome = nome
      this.ram = ram
      this.cpu = cpu
      this.ligado = false
   }

   info(): void {
      console.log(`Nome..: ${this.nome}`)
      console.log(`Ram...: ${this.ram}`)
      console.log(`Cpu...: ${this.cpu}`)
      console.log(`Ligado: ${this.ligado ? 'Sim' : 'Não'}`)
      console.log('-------------')
   }

   ligar(): void {
      this.ligado = true
   }

   desligar(): void {
      this.ligado = false
   }
}

// Instanciar
const comp118 = new Computador18("Rapidao", 64, 10)
const comp218 = new Computador18("Carao", 32, 5)
const comp318 = new Computador18("Gamer", 128, 10)

comp118.ligar()
comp318.ligar()

comp118.info()
comp218.info()
comp318.info()