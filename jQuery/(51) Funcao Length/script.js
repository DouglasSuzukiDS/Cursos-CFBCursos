// (51) Função Length
// Para pegar o event em ArrowFunction(E) se usa e.currentTarget
// Para pegar o event em Function() normal se usa o this

// Para usar o jQuery, ou você usa o $ ou jQuery
// Para usar um comando expecifico se deve usar o noConflict

$('#btn_p')
   .click((e) => {
      alert($('p').length)
   })

$('#btn_h4')
   .click(function() {
      alert($('h4').length)
   })

