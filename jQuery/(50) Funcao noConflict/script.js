// (50) Funcao noConflict
// Para pegar o event em ArrowFunction(E) se usa e.currentTarget
// Para pegar o event em Function() normal se usa o this

// Para usar o jQuery, ou você usa o $ ou jQuery
// Para usar um comando expecifico se deve usar o noConflict

let cfb = $.noConflict()

cfb('p')
   .click((e) => {
      alert(cfb(e.currentTarget).index())
   })

cfb('h4')
   .click(function() {
      alert(cfb(this).index())
   })

