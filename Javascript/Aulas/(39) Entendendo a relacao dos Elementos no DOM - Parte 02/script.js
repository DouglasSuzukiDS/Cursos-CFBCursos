// (39) Entendendo a relacao dos Elementos no DOM - Parte 02

const caixa1 = document.querySelector('#caixa1')
const btn_c = document.querySelectorAll('.curso')
const c1_2 = document.querySelector('#c1_2')

// console.log(caixa1.hasChildNodes())
// console.log(btn_c[0].hasChildNodes())
// console.log(btn_c[0].childNodes)
// console.log(btn_c[0].children) 

/*if(btn_c[0].children.length > 0) {
   console.log('Possui filhos')
} else {
   console.log('Não possui filhos')
} */

// console.log(btn_c[0].children.length > 0 ? 'Possui filhos': 'Não possui filhos')

// console.log(caixa1.firstElementChild.innerHTML = 'Teste')
// console.log(caixa1.children[1].innerHTML = 'Teste')

// console.log(c1_2.parentNode) // O pai do elemento
console.log(c1_2.parentNode.parentNode) // O avo do elemento
console.log(c1_2.parentNode.parentNode.children[4]) // O 4 filho
