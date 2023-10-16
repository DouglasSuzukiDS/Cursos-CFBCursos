// (145) Aprendendo Criar uma Tela de Login - Parte 05

class Login {

   // Replit It
   // https://Login.kakashisuzuki.repl.co/?matricula=123&senha=321
   /* let http = require('http')
   let url = require('url')
   
   http.createServer((req, res) => {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.writeHead(200, { 'Content-Type': 'application/json' })
   
      let parametros = url.parse(req.url, true)
   
      let mat = parametros.query.matricula
      let pas = parametros.query.senha
   
      let dados = null
   
      if(mat === '123' && pas === '321') {
         dados = {
            nome: 'Kaido',
            accesso: 10
         }
      }
   
      res.end(JSON.stringify(dados))
   }) .listen(8080) */

   static logado = false
   static matlogado = null
   static nomelogado = null
   static acessologado = null
   static estilocss = null
   static endpoint = 'https://login.kakashisuzuki.repl.co/'
   // https://Login.kakashisuzuki.repl.co/?matricula=123&senha=321

   static login = (mat, pas) => {
      this.endpoint += `?matricula=${mat}&senha=${pas}`
      this.estilocss = 
      `.fundoLogin { 
         display: flex; 
         justify-content: center; 
         align-items: center;
         width: 100%; 
         height: 100vh; 
         position: absolute; 
         top: 0px; 
         left: 0px; 
         background-color: rgba(0, 0, 0, 0.75); 
         box-sizing: border-box; 
      }` +
      
      `.baseLogin { 
         display: flex;
         justify-content: center; 
         align-items: stretch; 
         width: 50%; 
         box-sizing: inherit; 
      }` +
      
      `.elementosLogin {
         display: flex;
         justify-content: center;
         align-items: flex-start;
         flex-direction: column;
         width: 50%;
         background-color: #EEE;
         padding: 10px;
         border-radius: 10px 0px 0px 10px;
         box-sizing: inherit;
      }` +
      
      `.logoLogin {
         display: flex;
         justify-content: center;
         align-items: center;
         width: 50%;
         background-color: #BBB;
         padding: 10px;
         border-radius: 0px 10px 10px 0px;
         box-sizing: inherit;
      }` +
      
      `.logoLogin img {
         width: 90%;
         box-sizing: inherit;
      }` +
      
      `.campoLogin {
         display: flex;
         justify-content: flex-start;
         align-items: flex-start;
         flex-direction: column;
         box-sizing: inherit;
         width: 100%;
         margin-bottom: 10px;
      }` +
      
      `.campoLogin label {
         font-size: 18px;
      }` +
      
      `.campoLogin input {
         font-size: 18px;
         padding: 5px;
         background-color: #FFF;
         border-radius: 5px;
         width: 100%;
      }` +
      
      `.botoesLogin { 
         display: flex; 
         justify-content: 
         space-around; 
         align-items: center; 
         width: 100%; 
         box-sizing: inherit; 
      }` +
      
      `.botoesLogin button { 
         cursor: pointer; 
         background-color: 
         #048; color: #FFF; 
         border-radius: 5px; 
         padding: 10px; 
         width: 100px; 
         box-sizing: inherit; 
      }`

      const styleEstilo = document.createElement("style")
      styleEstilo.setAttribute("id", "id_estiloLogin")
      styleEstilo.setAttribute("rel", "stylesheet")
      styleEstilo.innerHTML = this.estilocss
      document.head.appendChild(styleEstilo)

      // fetch(this.endpoint)
      //    .then(res => res.json())
      //    .then(res => {
      //       if (res) {
      //          this.logado = true,
      //          this.matlogado = mat,
      //          this.nomelogado = res.nome,
      //          this.acessologado = res.acesso,
      //          console.log(res)
      //       } else {
      //          console.log('Usuário não encontrado')
      //       }
      //    })
      
   }
}


export { Login }