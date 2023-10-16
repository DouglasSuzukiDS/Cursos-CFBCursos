// (53) Aprendendo sobre Array - Parte 02

// Push() => Adiciona no Final
// Pop() => Removeno Final
// Unshift() => Adiciona no Inicio
// Shift() => Remove no Inicio

/*let valores = [1, 2, 3, 4, 5]
let op = [
   (val) => {
      let res = 0
      for(v of val) {
         res += v
      }
      return res
   },
   (val) => {
      let res = 1
      for(v of val) {
         res *= v
      }
      return res
   },
   (val) => {
      for(v of val) {
         console.log(v)
      }
   },
]

console.log(op[0](valores))
console.log(op[1](valores))
op[2](valores)*/

// Desafio Minha Resolução
/*let valor1 = document.querySelector('#valor1')
let valor2 = document.querySelector('#valor2')
let res = document.querySelector('#res')

let btnSoma = document.querySelector('#btn_soma')
let btnSubtracao = document.querySelector('#btn_subtracao')
let btnMultiplicacao = document.querySelector('#btn_multiplicacao')
let btnDivisao = document.querySelector('#btn_divisao')

let op = [
   (v1, v2) => {
      let resOp = v1 + v2
      return resOp
   },
   (v1, v2) => {
      let resOp = v1 - v2 
      return resOp
   },
   (v1, v2) => {
      let resOp = v1 * v2
      return resOp
   },
   (v1, v2) => {
      let resOp = v1 / v2
      return resOp
   },
]

btnSoma.addEventListener('click', () => {
   console.log(op[0](parseInt(valor1.value), parseInt(valor2.value)))
   res.value = op[0](parseInt(valor1.value), parseInt(valor2.value))
})

btnSubtracao.addEventListener('click', () => {
   console.log(op[1](parseInt(valor1.value), parseInt(valor2.value)))
   res.value = op[1](parseInt(valor1.value), parseInt(valor2.value))
})

btnMultiplicacao.addEventListener('click', () => {
   console.log(op[2](parseInt(valor1.value), parseInt(valor2.value)))
   res.value = op[2](parseInt(valor1.value), parseInt(valor2.value))
})

btnDivisao.addEventListener('click', () => {
   console.log(op[3](parseInt(valor1.value), parseInt(valor2.value)))
   res.value = op[3](parseInt(valor1.value), parseInt(valor2.value))
})*/

const btn_soma = document.querySelector('#btn_soma')
const btn_subtracao = document.querySelector('#btn_subtracao')
const btn_multiplicacao = document.querySelector('#btn_multiplicacao')
const btn_divisao = document.querySelector('#btn_divisao')
const res = document.querySelector('#res')

const op = [
   () => {
      const val = [document.getElementById('valor1').value, document.getElementById('valor2').value]
      res.value = Number(val[0]) + Number(val[1])
   },
   () => {
      const val = [document.getElementById('valor1').value, document.getElementById('valor2').value]
      res.value = Number(val[0]) - Number(val[1])
   },
   () => {
      const val = [document.getElementById('valor1').value, document.getElementById('valor2').value]
      res.value = Number(val[0]) * Number(val[1])
   },
   () => {
      const val = [document.getElementById('valor1').value, document.getElementById('valor2').value]
      res.value = Number(val[0]) / Number(val[1])
   },
]

btn_soma.addEventListener('click', op[0])
btn_subtracao.addEventListener('click', op[1])
btn_multiplicacao.addEventListener('click', op[2])
btn_divisao.addEventListener('click', op[3])