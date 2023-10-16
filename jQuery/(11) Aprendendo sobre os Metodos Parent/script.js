/* $('p').parent().css({'border': '1px solid #F00'}) // Elemento Pai
$('li').parent().css({'border': '1px solid #00F'})
$('li').parent().css({'border': '1px solid #00F'})
$('div').parent().css({'border': '1px solid #FF0'})
$('body').parent().css({'border': '1px solid #F0F'}) */ 

//$('p').parents().css({'border': '1px solid #F00'}) // Todos os Elementos acima desse elemento

$('p').parentsUntil('div').css({'border': '1px solid #00F'})
   // parentsUntil('ELEMENT'): Todos os Elementos ate o elemento informado



