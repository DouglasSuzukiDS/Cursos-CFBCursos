$('#btnAumentar')
   .click(function() {
      $('#caixa').animate({width: 800}, 10000)
   })

$('#btnDiminuir')
   .click(function() {
      $('#caixa').animate({width: 100}, 10000)
   })

$('#btnFinalizar')
   .click(function() {
      $('#caixa').finish()
   })