const btn_menuPrincipal = document.querySelector('#btn_menuPrincipal')
const menuPrincipal = document.querySelector('#menuPrincipal')
const todosMenusPrincipais = document.querySelectorAll('.btn_menuItem')

btn_menuPrincipal.addEventListener('click', (evt) => {
   menuPrincipal.classList.toggle('ocultar')
})