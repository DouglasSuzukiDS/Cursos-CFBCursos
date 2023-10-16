// (123) Aprendendo sobre Fetch para consumo de APIs - Parte 02

// No replitit
/*var http = require('http')

http.createServer(function(req, res) {
   res.setHeader('Access-Control-Allow-Origin', '*')
   res.writeHead(200, { 'Content-Type': 'application/json' })

   let numero = {
      temperatura: Math.round(Math.random() * 10),
      nivel: Math.round(Math.random() * 10),
      pressao: Math.round(Math.random() * 10)
   }
   res.end(JSON.stringify(numero))
}).listen(8080)*/

const p_temp = document.getElementById('p_temp')
const p_nivel = document.getElementById('p_nivel')
const p_press = document.getElementById('p_press')

const obterDados = () => {
   const endpoint = 'https://cfbcursos.kakashisuzuki.repl.co'
   
   fetch(endpoint)
      // .then(res => console.log(res))
      .then(res => res.json())
      .then(dados => { // Aqui retorna o valor sorteado da API
         console.log(dados)
         p_temp.innerHTML = 'Temperatura: ' + dados.temperatura
         p_nivel.innerHTML = 'Nível: ' + dados.nivel
         p_press.innerHTML = 'Pressão: ' + dados.pressao
      })
}

let intervalor = setInterval(obterDados, 3000)
