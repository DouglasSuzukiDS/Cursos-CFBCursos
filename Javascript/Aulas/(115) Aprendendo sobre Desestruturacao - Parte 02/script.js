// (115) Aprendendo sobre Desestruturação - Parte 02
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]
let [a, b, c, ...d] = numeros
console.log(a, b, c, d)

let obj = { nome: 'Shanks', canal: 'CFB Cursos', curso: 'Javascript' }
let { nome, canal } = obj
console.log(nome, canal)

const cores = () => {
   return ['Verde', 'Amarelo', 'Azul', 'Branco']
}

let [c1, c2, /* vazio/pula */ , c3] = cores()
console.log(c1, c2, c3)

let texto = 'Curso de Javascript'
let [t] = texto.split(' ')
console.log(t)

let [p1, p2, p3] = texto.split(' ')
console.log(p1, p2, p3)

