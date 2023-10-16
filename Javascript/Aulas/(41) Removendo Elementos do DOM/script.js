// (41) Removendo Elementos do DOM

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

   /*novoElemento.addEventListener('click', () => {
      // console.log(event.target) // Retorna o elemento
      caixa1.removeChild(event.target)
   })*/

   const btn_lixeira = document.createElement('img')
   btn_lixeira.setAttribute('src', './icone_lixeira.png')
   btn_lixeira.setAttribute('class', 'btn_lixeira')
   
   btn_lixeira.addEventListener('click', (evt) => {
      console.log(evt.target.parentNode)
      caixa1.removeChild(evt.target.parentNode)
   })

   novoElemento.appendChild(btn_lixeira)
   caixa1.appendChild(novoElemento)
})