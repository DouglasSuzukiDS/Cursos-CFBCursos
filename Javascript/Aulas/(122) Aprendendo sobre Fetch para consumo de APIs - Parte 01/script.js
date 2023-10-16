// (122) Aprendendo sobre Fetch para consumo de APIs - Parte 01

// No replitit
/*var http = require('http')

http.createServer(function(req, res) {
   res.setHeader('Access-Control-Allow-Origin', '*')
   res.writeHead(200, { 'Content-Type': 'application/json' })

   let numero = {
      valor: Math.round(Math.random() * 10)
   }
   res.end(JSON.stringify(numero))
}).listen(8080)*/

let p_texto = document.getElementById('p_texto')
let btn_texto = document.getElementById('btn_texto')

const endpoint = 'https://cfbcursos.kakashisuzuki.repl.co'
fetch(endpoint)
   // .then(res => console.log(res))
   .then(res => res.json())
   .then(dados => { // Aqui retorna o valor sorteado da API
      console.log(dados)
   })

