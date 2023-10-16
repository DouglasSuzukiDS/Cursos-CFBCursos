// (40) Criando novos Elementos e Adicionando no DOM

const caixa1 = document.querySelector('#caixa1')
const btn_c = document.querySelectorAll('.curso')
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'React Native']

/*const novoElemento = document.createElement('div')
novoElemento.setAttribute('id', 'c7')
novoElemento.setAttribute('class', 'curso c1')
novoElemento.innerHTML = 'React Native'

caixa1.appendChild(novoElemento)*/

cursos.map((el, chave) => {
   // console.log(chave)
   const novoElemento = document.createElement('div')
   novoElemento.setAttribute('id', 'c' + chave)
   novoElemento.setAttribute('class', 'curso c1')
   novoElemento.innerHTML = el
   caixa1.appendChild(novoElemento)
})