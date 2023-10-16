// (47) Funcao Each
// Para pegar o event em ArrowFunction(E) se usa e.currentTarget
// Para pegar o event em Function() normal se usa o this

$('#btn_each')
   .click(() => {
      $('p').each(function() {
         alert($(this).text())
      })
   })

$('#btn_cor')
   .click(() => {
      $('p').each(function() {
         $(this).addClass('cor')
      })   
   })



