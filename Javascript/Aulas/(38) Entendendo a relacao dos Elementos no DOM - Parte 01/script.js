// (38) Entendendo a relacao dos Elementos no DOM - Parte 01

const caixa1 = document.querySelector('#caixa1')
const btn_c = document.querySelectorAll('.curso')

// console.log(btn_c)
// console.log(caixa1.children)
// console.log(caixa1.children[caixa1.children.length - 1]) // Ultimo
// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)
// console.log(caixa1.children)

console.log(btn_c[0].getRootNode())
console.log(btn_c[0].ownerDocument)
