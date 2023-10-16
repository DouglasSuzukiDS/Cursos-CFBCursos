// Curso de Typescript Completo #P12 Aprendendo sobre Funções em Typescript #P1

function teste(): void {
   console.log('teste')
}
// teste()

function logar(user: string, pass: string): void {
   console.log(`User: ${user}`)
   console.log(`Pass: ${pass}`)
}
// logar('Nick', '123')
// logar('teste', '000')

function soma2(n1: number, n2: number): number {
   return n1 + n2
}
// console.log(soma2(10, 5))
const n_res = soma2(10, 5)
const s_res: string = soma2(10, 5).toString()
console.log(n_res)
console.log(s_res)
