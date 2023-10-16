// (39) Aprendendo sobre a Função Detach

let items = $('.item')
let i = 0
// console.log(items)

$('#btnMudar')
   .click(() => {
      let item = $(items[i]).detach() // Remove o elemento mas o mantem para ser transferido pra outra variavel para o recupera-lo
      i++
      $('#caixa2').append(item)
   })

$('#btnReset')
   .click(() => {
      for(let i = 0; i < items.length; i++){
         let item = $(items[i]).detach()
         $('#caixa1').append(item)
      }
      i = 0
   })