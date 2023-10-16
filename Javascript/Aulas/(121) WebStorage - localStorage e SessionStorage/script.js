// (121) WebStorage - localStorage e SessionStorage

const f_texto = document.querySelector('#f_texto')
const p_texto = document.querySelector('#p_texto')
const btn_texto = document.querySelector('#btn_texto')

btn_texto.addEventListener('click', (evt) => {
   
})

let num = 10
const curso = 'Javascript'

// window.localStorage.setItem('numero', num)
// localStorage.setItem('numero', num) // Cria
// localStorage.setItem('numero', 33)
// localStorage.setItem('nome', 'Nick')
// localStorage.setItem('canal', 'CFB Cursos')
// localStorage.setItem('curso', curso)

// alert(localStorage.getItem('numero')) // Pega o valor da key
// alert(localStorage.getItem('nome'))
// alert(localStorage.getItem('canal'))

localStorage.clear() // Remove todas as chaves

// alert(localStorage.key(0))
// alert(localStorage.getItem(localStorage.key(0)))

// alert(localStorage.length)

sessionStorage.setItem('nome', 'Nick') // Cria apenas para seção
sessionStorage.setItem('canal', 'CFB Cursos')
sessionStorage.setItem('curso', curso)
