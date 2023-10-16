// (37) Parando a propagacao do evento com o metodo stopPropagation

const caixa1 = document.querySelector('#caixa1')
const btn_c1 = document.querySelector('#c1')
const cursos = [...document.querySelectorAll('.curso')]

caixa1.addEventListener('click', (evt) => {
   //console.log(evt.target) // quem Disparou o evento
   console.log('clicou')
   console.log(evt)
})

/*btn_c1.addEventListener('click', (evt) => {
   evt.stopPropagation() // Para a propagação do evento
   // console.log('clicou')
})*/

cursos.map((el) => {
   el.addEventListener('click', (evt) => {
      evt.stopPropagation() // Para a propagação do evento
      // console.log('clicou')
   })
})

