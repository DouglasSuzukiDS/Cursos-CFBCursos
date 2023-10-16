// (22) Funcoes Parametrizada - Parte 03

/*function soma(p1) {
   console.log(p1)
}

soma(1)
soma('Função Parametrizada')*/

/*function soma(n1, n2) {
   console.log(n1 + n2)
}

soma(5, 10)*/

/*function soma(n1 = 0, n2 = 0) { // Valor Padrao para quando o vaor não for informado
   console.log(n1 + n2)
}

soma(10)*/

/*let valor_padrao = 0
function soma(n1 = 0, n2 = valor_padrao) { // Valor Padrao para quando o vaor não for informado
   // return n1 + n2
   let res 
   res = n1 + n2 
   return res
}

console.log(soma(10 + 10))
let resultado_soma = soma(5, 5)
console.log(resultado_soma)*/

let valor = 0
console.log(valor)


/*function add(v) {
   return valor + v
}

valor = add(10)
console.log(valor)

valor = add(5)
console.log(valor)*/

function add(v) {
   valor += v
}
add(10)
console.log(valor)

add(5)
console.log(valor)