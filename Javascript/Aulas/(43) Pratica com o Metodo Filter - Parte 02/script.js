// (43) Pratica com o Metodo Filter - Parte 02
const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [ ...document.querySelectorAll('.curso') ]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'React Native']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')

cursos.map((el , chave) => {
   const novoElemento = document.createElement('div')
   novoElemento.setAttribute('id', 'c' + chave)
   novoElemento.setAttribute('class', 'curso c1')
   novoElemento.innerHTML = el 
   // console.log(novoElemento)

   const comandos = document.createElement('div')
   comandos.setAttribute('class', 'comandos')
   // console.log(comandos)

   const rb = document.createElement('input')
   rb.setAttribute('type', 'radio')
   rb.setAttribute('name', 'rb_curso')
   // console.log(rb)

   comandos.appendChild(rb)
   
   novoElemento.appendChild(comandos)

   caixaCursos.appendChild(novoElemento)
})

btnCursoSelecionado.addEventListener('click', (evt) => {
   const todosRadios = [...document.querySelectorAll('input[type=radio]')]
   let radioSelecionando = todosRadios.filter((ele, ind, arr) => {
      return ele.checked
   })
   radioSelecionando = radioSelecionando[0]
   // const cursoSelecionado = radioSelecionando.parentNode.parentNode.firstChild.textContent // Pegar o Text
   const cursoSelecionado = radioSelecionando.parentNode.previousSibling.textContent

   // console.log(todosRadios)
   // console.log(radioSelecionando)
   // console.log(cursoSelecionado)

   alert('Curso selecionado: ' + cursoSelecionado)
})

// parentNode
// childNodes[nodeNumber]
// firstChild
// lastChild
// nextSibling
// preveiousSibling