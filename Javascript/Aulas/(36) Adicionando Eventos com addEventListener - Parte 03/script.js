// (36) Adicionando Eventos com addEventListener - Parte 03

/* My Code
let courses = [ ...document.querySelectorAll('.curso') ]
let box2 = document.querySelector('#caixa2')
let button = document.querySelector('#btn_copiar')

courses.map(el => {
   el.addEventListener('click', () => {
      el.classList.add('destaque')
      // console.log(courses)
   })
})

button.addEventListener('click', () => {
   console.log(courses)
   // console.log(box2)

   const mark = [...document.querySelectorAll('.destaque')]
   console.log(mark)

   for(let i = 0; i < mark.length; i++) {
      mark[i].classList.remove('destaque')
      box2.appendChild(mark[i])
   }
}) */

const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn_transferir = document.querySelector('#btn_transferir')
const todosCursos = [...document.querySelectorAll('.curso')]

todosCursos.map(el => {
   el.addEventListener('click', (evt) => {
      const curso = evt.target
      // console.log(curso)
      curso.classList.toggle('selecionado')
   })
})

btn_transferir.addEventListener('click', () => {
   const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
   // console.log(cursosSelecionados)

   const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')] // Retorna todos os elementos que não possuam tal atributo
   // console.log(cursosNaoSelecionados)

   cursosSelecionados.map(el => {
      caixa2.appendChild(el)
   })

   cursosNaoSelecionados.map(el => {
      caixa1.appendChild(el)
   })
})