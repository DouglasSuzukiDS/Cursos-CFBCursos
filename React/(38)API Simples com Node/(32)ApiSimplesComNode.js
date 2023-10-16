var carros = '[' + 
  '{"id": 1, "marca": "Honda", "modelo":"HRV"},' +
  '{"id": 2, "marca": "VW", "modelo":"Golf"},' +
  '{"id": 3, "marca": "Fiat", "modelo":"Toro"},' +
  '{"id": 4, "marca": "GM", "modelo":"Tracker"}' + 
']'

//var obj = JSON.parse(carros)
var http = require('http')
var server = http.createServer(function(request, response) {
  response.setHeader( 'Access-Control-Allow-Origin', '*')
  response.writeHead(200, {"Content-Type":"text/html"})
  //response.write(obj)
  response.write(carros)
  response.end()
})
server.listen(3000)

// Codigo usado na aula feito no site replit.com