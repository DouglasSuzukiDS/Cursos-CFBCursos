$('.itemMenu')
   .mouseover(function() {
      $(this).fadeTo(200, 0.2) // Velocidade, Opacidade
   })
   .mouseleave(function() {
      $(this).fadeTo(200, 1)
   })
