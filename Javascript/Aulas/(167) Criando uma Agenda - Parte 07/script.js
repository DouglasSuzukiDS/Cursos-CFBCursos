// (167) Criando uma Agenda - Parte 07

const cabecalho = document.querySelector('#cabecalho')
const menu = document.querySelector('#menu')
const principal = document.querySelector('#principal')
const btn_home = document.querySelector('#btn_home')
const btn_novo = document.querySelector('#btn_novo')
const btn_pesquisar = document.querySelector('#btn_pesquisar')
const btn_gestao = document.querySelector('#btn_gestao')
const btn_sobre = document.querySelector('#btn_sobre')

btn_home.addEventListener('click', (evt) => {
   abrirPagina(evt.target, './home.html')
   // window.open('./home.html', 'if_principal')
})

btn_novo.addEventListener('click', (evt) => {
   abrirPagina(evt.target, './novo.html')
   // window.open('./novo.html', 'if_principal')
})

btn_pesquisar.addEventListener('click', (evt) => {
   abrirPagina(evt.target, './pesquisar.html')
   // window.open('./pesquisar.html', 'if_principal')
})

btn_gestao.addEventListener('click', (evt) => {
   abrirPagina(evt.target, './gestao.html')
   // window.open('./gestao.html', 'if_principal')
})

btn_sobre.addEventListener('click', (evt) => {
   abrirPagina(evt.target, './sobre.html')
   // window.open('./sobre.html', 'if_principal')
})

const abrirPagina = (el, url) => {
   const abas = [...document.querySelectorAll('.aba')]
   // console.log(abas)
   abas.forEach(e => {
      e.classList.remove('abaSelecionada')
   })
   el.classList.add('abaSelecionada')
   window.open(url, 'if_principal')
}