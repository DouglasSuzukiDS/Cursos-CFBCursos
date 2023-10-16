$('.itemMenu')
   .mouseover(function() {
      $(this).fadeTo(200, 0.2) // Velocidade, Opacidade
   })
   .mouseleave(function() {
      $(this).fadeTo(200, 1)
   })


$('#menujquery')
   .click(function() {
      $('#submenu_jquery').fadeToggle()
      $('#submenu_jquery').css('display', 'flex')
   })

$('#menucanvas')
.click(function() {
   $('#submenu_canvas').fadeToggle()
   $('#submenu_canvas').css('display', 'flex')
})

$('#menupython')
.click(function() {
   $('#submenu_python').fadeToggle()
   $('#submenu_python').css('display', 'flex')
})

$('#menuarduino')
.click(function() {
   $('#submenu_arduino').fadeToggle()
   $('#submenu_arduino').css('display', 'flex')
})