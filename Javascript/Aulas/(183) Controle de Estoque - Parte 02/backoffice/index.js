const btn_menuPrincipal = document.querySelector('#btn_menuPrincipal')
const menuItens = document.querySelector('.menuItens')

btn_menuPrincipal.addEventListener('click', (evt) => {
   menuItens.classList.toggle('ocultar')
})