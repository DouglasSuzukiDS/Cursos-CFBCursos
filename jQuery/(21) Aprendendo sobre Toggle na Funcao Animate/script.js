$('#btn_tamanho').click(
   function() {
      $('#caixa')
         .animate({width: 'toggle', height: 'toggle'}, {duration: 2000})
   }
)

$('#btn_mostrar').click(
   function() {
      $('#caixa')
         .animate({opacity: 'toggle'}, {duration: 2000})
   }
)



