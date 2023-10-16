// (40) Função hasClass - Como saber se um elemento usa uma dederminada Classe

$('.btnFechar')
   .click((e) => {
   //console.log(e.target.id) // Pega o ID do elemento
   $('#' + (e.target.id)).parent().addClass('ocultar')
   })

$('#btnReset')
   .click((e) => {
      let items = $('.caixa')
      for(let i = 0; i < items.length; i++) {
         let item = $(items[i])
         if(item.hasClass('ocultar')) {
            item.removeClass('ocultar')
         }
      }
   })