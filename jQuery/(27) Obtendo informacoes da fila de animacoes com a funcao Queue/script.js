const cx = $('#caixa')
$('#btnAumentar')
   .click(function() {
     cx.animate(
        {width: 800},
        {duration: 5000, complete: () => { $('#info').text(cx.queue().length) }})
      $('#info').text(cx.queue().length)
   })

$('#btnDiminuir')
   .click(function() {
      cx.animate(
         {width: 100}, 
         {duration: 5000, complete: () => { $('#info').text(cx.queue().length) }})
      $('#info').text(
         cx.queue().length
      )
   })

$('#btnFinalizar')
   .click(function() {
     cx.finish()
   })