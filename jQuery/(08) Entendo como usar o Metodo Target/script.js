/*$('#texto1').click((event) => {
   //$('#resultado').text('X: ' + event.pageX + ', Y: ' + event.pageY)
   $('#resultado').text('Objeto foi clicado: ' + event.target.nodeName)
})

$('#texto2').click((event) => {
   $('#resultado').text('Objeto foi clicado: ' + event.target.nodeName)
})*/

$(document).click((event) => {
   // $('#resultado').text('Objeto clicado: ' + event.target.tagName)
   $('#resultado').text('Objeto clicado: ' + event.target.id)
   if(event.target.id == 'resultado') {
      alert('Resultado Clicado')
   }
})