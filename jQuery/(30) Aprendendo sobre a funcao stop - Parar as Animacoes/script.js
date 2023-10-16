// (30) Aprendendo sobre a função stop - Parar as Animações
$('.btnAnimar')
   .click(function() {
      $('#caixa').animate({left: 800}, {duration: 2000})
      $('#caixa').animate({top: 400}, {duration: 2000})
      $('#caixa').animate({left: 0}, {duration: 2000})
      $('#caixa').animate({top: 50}, {duration: 2000})
   })

$('.btnProxima')
   .click(function() {
      $('#caixa').stop() 
   })

$('.btnParar')
   .click(function() {
      $('#caixa').stop(true, false) // Limpar Fila, Pular para o Fim
   })

$('.btnFim')
   .click(function() {
      $('#caixa').stop(false, true)
   })


