import { Cxmsg } from "../../utils/cxmsg.js"

const f_email = document.querySelector('#f_email')
const f_senha = document.querySelector('#f_senha')
const btn_login= document.querySelector('#btn_login')

let serv = null

const endpoint_config = `../config.txt`
fetch(endpoint_config)
   .then(res => res.json())
   .then(res => {
      sessionStorage.setItem('servidor_nodered', res.servidor_nodered)
      sessionStorage.setItem('versao', res.versao)
      serv = res.servidor_nodered
   })

btn_login.addEventListener('click', (evt) => {
   if(serv !== null) {
      const email = f_email.value
      const senha = f_senha.value

      const endpoint = `${serv}/login/${email}/${senha}`
      fetch(endpoint)
         .then(res => {
            if(res.status === 200) { // Ok
               window.location.href = './main.html'
            } else if(res.status === 208) { // Senha errada
               console.log('Senha errada')
               const config = {
                  titulo: 'Erro',
                  texto: 'Senha incorreta',
                  cor: '#800',
                  tipo: 'ok',
                  ok: () => {},
                  sim: () => {},
                  nao: () => {}
               }
      
               Cxmsg.mostrar(config)
            } else if(res.status === 205) { // Primeiro acesso
               console.log('Primeiro acesso')
            }
         })
         .catch(err => console.log(err))
   }
})