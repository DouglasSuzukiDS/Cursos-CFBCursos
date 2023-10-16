// (52) Função toArray
// Para pegar o event em ArrowFunction(E) se usa e.currentTarget
// Para pegar o event em Function() normal se usa o this

// Para usar o jQuery, ou você usa o $ ou jQuery
// Para usar um comando expecifico se deve usar o noConflict

let ep = $('p').toArray()
let eh = $('h4').toArray()
console.log(ep)
console.log(eh)
console.log($('p'))
console.log($('h4'))

$('#p_para_caixa2')
   .click(() => {
      // console.log($('p').toArray())
      $('#caixa2').append(ep)
      $('#caixa1').append(eh)
   })

$('#h4_para_caixa2')
   .click(function() {
      $('#caixa2').append(eh)
      $('#caixa1').append(ep)
   })

