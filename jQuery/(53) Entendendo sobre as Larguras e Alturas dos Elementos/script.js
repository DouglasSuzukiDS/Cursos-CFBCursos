// (53) Entendendo sobre as Larguras e Alturas dos Elementos
// Para pegar o event em ArrowFunction(E) se usa e.currentTarget
// Para pegar o event em Function() normal se usa o this

let cx = $('#caixa1')
$('#info').html(
   'Width: ' + cx.width() + 
   '<br/> Height: ' + cx.height() +
   '<br/> InnerWidth: ' + cx.innerWidth() +
   '<br/> InnerHeight: ' + cx.innerHeight() +
   '<br/> OuterWidth: ' + cx.outerWidth() + 
   '<br/> OuterHeight: ' + cx.outerHeight() +
   '<br/> OuterWidth(true): ' + cx.outerWidth(true) + 
   '<br/> OuterHeight(true): ' + cx.outerHeight(true)
)

