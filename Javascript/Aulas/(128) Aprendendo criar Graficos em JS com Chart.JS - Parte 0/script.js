// (128) Aprendendo criar Graficos em JS com Chart.JS - Parte 02

// No replitit
/*var http = require('http')

http.createServer(function(req, res) {
   res.setHeader('Access-Control-Allow-Origin', '*')
   res.writeHead(200, { 'Content-Type': 'application/json' })

   let oee = {
      disponibilidade: Math.round(Math.random() * 100),
      qualidade: Math.round(Math.random() * 100),
      performance: Math.round(Math.random() * 100)
   }

   res.end(JSON.stringify(oee))
}).listen(8080)*/

const obterDados = () => {
   const endpoint = 'https://cfbcursos.kakashisuzuki.repl.co'
   
   fetch(endpoint)
      .then(res => res.json())
      .then(res => {
         console.log(res.qualidade)
         console.log(res.disponibilidade)
         console.log(res.performance)
   
         valores[0] = res.qualidade
         valores[1] = res.disponibilidade
         valores[2] = res.performance
   
         grafico1.update()
      })
      .catch(erro => {
         console.log('Erro: ' + erro)
      })
}

let intervalo = setInterval(obterDados, 3000)