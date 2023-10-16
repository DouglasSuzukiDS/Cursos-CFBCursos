// (34) Adicionando Eventos com addEventListener - Parte 01

/*function msg() {
   alert('Clicou')
}*/

//const c1 = document.getElementById('c1')
const c1 = document.querySelector('#c1')

const msg = () => {
   alert('Clicou')
}

// c1.addEventListener('click', msg)
/*c1.addEventListener('click', () => {
   msg()
})*/

/*c1.addEventListener('click', (evt) => { // Quem disparou o event
   console.log(evt.target) // Quem disparou o event
   const el = evt.target
   el.classList.add('destaque')
})*/

const cursos = [...document.querySelectorAll('.curso')]

cursos.map(el => {
   el.addEventListener('click', (evt) => {
      const el = evt.target
      el.classList.add('destaque')
      console.log(el.id + ' foi clicado')
      console.log(el.innerHTML + ' foi clicado')
   })
})