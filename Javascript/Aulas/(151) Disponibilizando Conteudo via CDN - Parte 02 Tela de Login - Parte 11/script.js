// (151) Disponibilizando Conteudo via CDN - Parte 02 Tela de Login - Parte 11 
import { Cxmsg } from './cxmsg.js'

// Login.login('123', '321')

const callback_ok = () => {
   
}

const callback_naook = () => {
   const config = {
      cor: '#800',
      tipo: 'ok',
      textos: null,
      comando_sn: () => {},
   }

   Cxmsg.mostrar(config, 'Erro', 'Login não efetuado! Usuário ou Senha incorretos.')
}

const configLogin = {
   cor: '#048',
   img: 'logo.png',
   endpoint: 'https://login.kakashisuzuki.repl.co'
}

Login.login(callback_ok, callback_naook, configLogin)