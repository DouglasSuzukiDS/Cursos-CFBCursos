const Coisas = ['Corda', 'Pilha', 'Lampada', 'Chave']

class Pessoa31 {
   nome: string
   altura: number

   constructor(nome: string, altura: number) {
      this.nome = nome
      this.altura = altura
   }
}

class Objeto31 {
   nome: string

   constructor(nome: string) {
      this.nome = nome
   }
}

export default Pessoa31
export { Coisas, Objeto31 }