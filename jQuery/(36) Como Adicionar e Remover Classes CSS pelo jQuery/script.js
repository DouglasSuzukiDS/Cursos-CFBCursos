// (36) Como Adicionar e Remover Classes CSS pelo jQuery

$('#btnVerde')
   .click(() => {
      $('#caixa').removeClass('azul')
      $('#caixa').removeClass('vermelho')
      $('#caixa').addClass('verde')
   })

$('#btnVermelho')
   .click(() => {
      $('#caixa').removeClass('azul')
      $('#caixa').removeClass('verde')
      $('#caixa').addClass('vermelho')
   })

$('#btnAzul')
   .click(() => {
      $('#caixa').removeClass('verde')
      $('#caixa').removeClass('vermelho')
      $('#caixa').addClass('azul')
   })