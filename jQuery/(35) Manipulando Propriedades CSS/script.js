// (35) Manipulando Propriedades CSS

$('#btnVerde')
   .click(() => {
      $('#caixa').css({ "background-color": "#0F0", "color": "#F0F"})
      alert($('#caixa').css('background-color')) // Sem o uso das {}, retorna o valor da propriedade
      alert($('#caixa').css('display'))
   })

$('#btnVermelho')
   .click(() => {
      $('#caixa').css({ "background-color": "#F00", "color": "#0FF"})
})

$('#btnAzul')
   .click(() => {
      $('#caixa').css({ "background-color": "#00F", "color": "#FF0"})
})