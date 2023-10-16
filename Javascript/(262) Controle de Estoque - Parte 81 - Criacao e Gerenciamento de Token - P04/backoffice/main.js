const serv = sessionStorage.getItem('servidor_nodered')

const verificarToken = () => {
   const token = sessionStorage.getItem('s_token_token')
   const endpoint =  `${serv}/verificatoken/${token}`
   console.log(endpoint)
   fetch(endpoint)
      //.then(res => res.json())
      .then(res => {
         alert('vai tomar no cu')
         console.log(res[0])
         if(res[0].retorno === 200) {
            console.log('Ok')
            //pagina()
         } else{
            // console.log('Não Ok')
            alert('Token Inválido')
         }
      })
}

verificarToken()

if(sessionStorage.getItem('n_pessoa_pessoa') === '-1') {
   window.location.href = './index.html'
}

const btn_menuPrincipal = document.querySelector('#btn_menuPrincipal')
const menuPrincipal = document.querySelector('#menuPrincipal')
const todosMenusPrincipais = [...document.querySelectorAll('.btn_menuItem')]
const divId = document.querySelector('#id')
const divNome = document.querySelector('#nome')
const btn_logoff = document.querySelector('#btn_logoff')

btn_menuPrincipal.addEventListener('click', (evt) => {
   menuPrincipal.classList.toggle('ocultar')
})

// console.log(todosMenusPrincipais)

todosMenusPrincipais.forEach(e => {
   e.addEventListener('click', (evt) => {
      menuPrincipal.classList.add('ocultar')
   })
})

btn_logoff.addEventListener('click', (evt) => {
   sessionStorage.setItem('n_pessoa_pessoa', '-1')
   sessionStorage.setItem('s_nome_pessoa', '-1')

   window.location.href = './index.html'
})

const n_pessoa_pessoa = sessionStorage.getItem('n_pessoa_pessoa')
const s_nome_pessoa = sessionStorage.getItem('s_nome_pessoa')

divId.innerHTML = `Id: ${ n_pessoa_pessoa }`
divNome.innerHTML = `Nome: ${ s_nome_pessoa }`

const pagina = () => {
   if(sessionStorage.getItem('n_pessoa_pessoa') === '-1') {
      window.location.href = './index.html'
   }
   
   const btn_menuPrincipal = document.querySelector('#btn_menuPrincipal')
   const menuPrincipal = document.querySelector('#menuPrincipal')
   const todosMenusPrincipais = [...document.querySelectorAll('.btn_menuItem')]
   const divId = document.querySelector('#id')
   const divNome = document.querySelector('#nome')
   const btn_logoff = document.querySelector('#btn_logoff')
   
   btn_menuPrincipal.addEventListener('click', (evt) => {
      menuPrincipal.classList.toggle('ocultar')
   })
   
   // console.log(todosMenusPrincipais)
   
   todosMenusPrincipais.forEach(e => {
      e.addEventListener('click', (evt) => {
         menuPrincipal.classList.add('ocultar')
      })
   })
   
   btn_logoff.addEventListener('click', (evt) => {
      sessionStorage.setItem('n_pessoa_pessoa', '-1')
      sessionStorage.setItem('s_nome_pessoa', '-1')
   
      window.location.href = './index.html'
   })
   
   const n_pessoa_pessoa = sessionStorage.getItem('n_pessoa_pessoa')
   const s_nome_pessoa = sessionStorage.getItem('s_nome_pessoa')
   
   divId.innerHTML = `Id: ${ n_pessoa_pessoa }`
   divNome.innerHTML = `Nome: ${ s_nome_pessoa }`
}
