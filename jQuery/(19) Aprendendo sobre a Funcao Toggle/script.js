$('#btn_mostrarocultar').click(
   function() {
      $('#caixa').toggle()
      if($('#caixa').is(':visible')) {
         $('#btn_mostrarocultar').text('Ocultar')
      } else {
         $('#btn_mostrarocultar').text('Mostarr')
      }
   }
)

