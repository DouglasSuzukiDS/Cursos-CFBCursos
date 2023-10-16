// (150) Disponibilizando Conteudo via CDN - Parte 01 Tela de Login - Parte 10
import { Cxmsg } from './cxmsg.js'

// Login.login('123', '321')

const callback_ok = () => {
   
}

const callback_naook = () => {
   const config = {
      cor: '#800',
      tipo: 'ok',
      textos: null,
      comando_sn: null,
   }

   Cxmsg.mostrar(config, 'Erro', 'Login não efetuado! Usuário ou Senha incorretos.')
}

Login.login(callback_ok, callback_naook)