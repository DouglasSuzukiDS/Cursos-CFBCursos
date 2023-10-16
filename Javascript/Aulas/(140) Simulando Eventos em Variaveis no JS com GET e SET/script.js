// (140) Simulando Eventos em Variaveis no JS com GET e SET

// Codigo no Replit It
/*var http = require('http')

http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.writeHead(200, { 'Content-Type': 'application/json' })

  let oee = {
    temperatura: Math.round(Math.random() * 100),
    nivel: Math.round(Math.random() * 100),
    pressao: Math.round(Math.random() * 100)
  }

  res.end(JSON.stringify(oee))
}).listen(8080)*/

const tmp = document.querySelector('#tmp')
const nvl = document.querySelector('#nvl')
const prs = document.querySelector('#prs')

let dados = {
   _temperatura: 0,
   _pressao: 0,
   _nivel: 0,
   set valores(val) {
      this._temperatura = val.temperatura
      this._pressao = val.pressao
      this._nivel = val.nivel

      tmp.innerHTML = this._temperatura
      nvl.innerHTML = this._nivel
      prs.innerHTML = this._pressao
   },
   get valores() {
      return [this._temperatura, this._pressao, this._nivel]
   }
}

const buscarDados = () => {
   const endpoint = 'https://cfbcursos.kakashisuzuki.repl.co'
   
   fetch(endpoint)
      .then(res => res.json())
      .then(res => {
         dados.valores = res
      })
}
   
let intervalo = setInterval(buscarDados, 1000)
onsole.log(dados.valores)
