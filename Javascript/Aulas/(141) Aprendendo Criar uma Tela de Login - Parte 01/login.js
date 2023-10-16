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
   static endpoint = 'https://login.kakashisuzuki.repl.co/'
   // https://Login.kakashisuzuki.repl.co/?matricula=123&senha=321

   static login = (mat, pas) => {
      this.endpoint += `?matricula=${mat}&senha=${pas}`
      fetch(this.endpoint)
         .then(res => res.json())
         .then(res => {
            if (res) {
               this.logado = true,
               this.matlogado = mat,
               this.nomelogado = res.nome,
               this.acessologado = res.acesso,
               console.log(res)
            } else {
               console.log('Usuário não encontrado')
            }
})
      
   }
}


export { Login }