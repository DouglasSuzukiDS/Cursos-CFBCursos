// (17) Curso de Typescript Completo #P17 Aprendendo sobre P.O.O. #P2 Método Construtor em Typescript
class Computador17 {
   nome: string
   ram: number
   cpu: number
   ligado: boolean

   constructor(nome: string, ram: number, cpu: number) {
      this.nome = nome
      this.ram = ram
      this.cpu = cpu
      this.ligado = false

      // console.log('Novo computado criado')
   }
}

// Instanciar
const comp117 = new Computador17("Rapidao", 64, 10)
const comp217 = new Computador17("Carao", 32, 5)
const comp317 = new Computador17("Gamer", 128, 10)

// comp117.nome = 'Rapidao'
// comp217.nome = 'Carao'
// comp317.nome = 'Gamer'

console.log(comp117.nome)
console.log(comp217.nome)
console.log(comp317.nome)