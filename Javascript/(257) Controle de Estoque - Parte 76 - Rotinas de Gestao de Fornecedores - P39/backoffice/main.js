const btn_menuPrincipal = document.querySelector('#btn_menuPrincipal')
const menuPrincipal = document.querySelector('#menuPrincipal')
const todosMenusPrincipais = [...document.querySelectorAll('.btn_menuItem')]
const divId = document.querySelector('#id')
const divNome = document.querySelector('#nome')

btn_menuPrincipal.addEventListener('click', (evt) => {
   menuPrincipal.classList.toggle('ocultar')
})

// console.log(todosMenusPrincipais)

todosMenusPrincipais.forEach(e => {
   e.addEventListener('click', (evt) => {
      menuPrincipal.classList.add('ocultar')
   })
})

const n_pessoa_pessoa = sessionStorage.getItem('n_pessoa_pessoa')
const s_nome_pessoa = sessionStorage.getItem('s_nome_pessoa')

divId.innerHTML = `Id: ${ n_pessoa_pessoa }`
divNome.innerHTML = `Nome: ${ s_nome_pessoa }`