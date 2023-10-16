$('.btnCima')
   .click(function() {
      $('#menus').slideUp(100, () => { $('#msg').text('Menu culto') })
   })

$('.btnBaixo')
   .click(function() {
      $('#menus').slideDown(100, () => { $('#msg').text('Menu mostrar')} )
   })