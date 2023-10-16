// (29) Aprendendo sobre a função slideToggle
$('.btnMenu')
   .click(function() {
      $('#menus').slideToggle(100, () => { 
         if($('#menus').is(':visible')) {
            $('#msg').text('Menu exibido')
            $('#controle').css('background', '#F00')
         } else {
            $('#msg').text('Menu oculto')
            $('#controle').css('background', '#888')
         }
      })
   })

