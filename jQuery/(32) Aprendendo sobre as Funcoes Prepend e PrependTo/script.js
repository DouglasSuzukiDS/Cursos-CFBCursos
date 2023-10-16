// (32) Aprendendo sobre as Funções Prepend e PrependTo

let r, g, b
let num = 0

$('#btnAdicionar')
   .click(() => {
      r = Math.floor(Math.random() * 255)
      g = Math.floor(Math.random() * 255)
      b = Math.floor(Math.random() * 255)
      $('#caixa').prepend("<div class='subcaixa' style=' background-color: rgb("+r+", "+g+", "+b+") '>"+num+"</div>")
         // Prepend = Adiciona o elemento no inicio
      num++
   })

$('#btnAdicionar5')
   .click(() => {
      for(let i = 0; i < 5; i++) {
         r = Math.floor(Math.random() * 255)
         g = Math.floor(Math.random() * 255)
         b = Math.floor(Math.random() * 255)
         //$("<div class='subcaixa' style=' background-color: rgb("+r+", "+g+", "+b+") '>"+num+"</div>").appendTo($('#caixa'))
            // AppendTo = Ser inserido no elemento
         $("<div class='subcaixa' style=' background-color: rgb("+r+", "+g+", "+b+") '>"+num+"</div>").prependTo($('#caixa')).text(num)
         num++
      }
   })


