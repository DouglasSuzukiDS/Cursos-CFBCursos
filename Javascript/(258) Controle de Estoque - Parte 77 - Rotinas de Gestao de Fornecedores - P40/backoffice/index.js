import { Cxmsg } from "../../utils/cxmsg.js"

const f_email = document.querySelector('#f_email')
const f_senha = document.querySelector('#f_senha')
const btn_login= document.querySelector('#btn_login')
const login = document.querySelector('#login')
const primeiroAcesso = document.querySelector('#primeiroAcesso')
const f_emailDefSenha = document.querySelector('#f_emailDefSenha')
const btn_fecharPopUpDefSenha = document.querySelector('#btn_fecharPopUpDefSenha')
const idDefSenha = document.querySelector('#idDefSenha')
const f_senha1 = document.querySelector('#f_senha1')
const f_senha2 = document.querySelector('#f_senha2')
const btn_gravarSenha = document.querySelector('#btn_gravarSenha')

let serv = null

sessionStorage.setItem('n_pessoa_pessoa', '-1')
sessionStorage.setItem('s_nome_pessoa', '-1')

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
      let senha = f_senha.value

      if(senha === '') {
         senha = -1
      }

      const endpoint = `${serv}/login/${email}/${senha}`
      //const endpoint = `${serv}/test/${email}/${senha}`
      fetch(endpoint)
         .then(res => res.json())
         .then(res => {
            // console.log(res[0].retorno)
            
            if(res[0].retorno === 200) { // Ok
               sessionStorage.setItem('n_pessoa_pessoa', res[0].n_pessoa_pessoa)
               sessionStorage.setItem('s_nome_pessoa', res[0].s_nome_pessoa)

               window.location.href = './main.html'
            } else if(res[0].retorno === 208) { // Senha errada
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
            } else if(res[0].retorno === 205) { // Primeiro acesso
               // console.log('Primeiro acesso')
               idDefSenha.value = res[0].n_pessoa_pessoa
               login.classList.add('ocultarPopUp')

               f_emailDefSenha.value = f_email.value

               primeiroAcesso.classList.remove('ocultarPopUp')
            }
         })
         .catch(err => console.log(err))
   }
})

btn_fecharPopUpDefSenha.addEventListener('click', (evt) => {
   primeiroAcesso.classList.add('ocultarPopUp')
   login.classList.remove('ocultarPopUp')
})

btn_gravarSenha.addEventListener('click', (evt) => {
   if(f_senha1.value !== '' && f_senha2.value !== '') {
      if(f_senha1.value !== f_senha2.value) {
         const config = {
            titulo: 'Alerta',
            texto: 'Senhas não são iguais',
            cor: '#008',
            tipo: 'ok',
            ok: () => {},
            sim: () => {},
            nao: () => {}
         }

         Cxmsg.mostrar(config)

      } else {
         const dados = {
            n_pessoa_pessoa: idDefSenha.value,
            s_senha_pessoa: f_senha1.value
         }

         const cab = {
            method: 'POST',
            body: JSON.stringify(dados)
         }

         let endpoint = `${serv}/gravarnovasenha`
         fetch(endpoint, cab)
            .then(res => {
               // Console.log(res)
               if(res.status === 200) {
                  primeiroAcesso.classList.add('ocultarPopUp')
                  login.classList.remove('ocultarPopUp')
                  f_senha.value = f_senha1.value
               }
            })
            .catch(err => console.log(err))
      }


   } else {
      const config = {
         titulo: 'Alerta',
         texto: 'Digite a senha nos dois campos',
         cor: '#008',
         tipo: 'ok',
         ok: () => {},
         sim: () => {},
         nao: () => {}
      }

      Cxmsg.mostrar(config)
   }
})