// (31) Aprendendo sobre as funções Append e AppendTo

let r, g, b

$('#btnAdicionar')
   .click(() => {
      r = Math.floor(Math.random() * 255)
      g = Math.floor(Math.random() * 255)
      b = Math.floor(Math.random() * 255)
      $('#caixa').append("<div class='subcaixa' style=' background-color: rgb("+r+", "+g+", "+b+") '></div>")
         // Append = Adiciona o elemento
   })

$('#btnAdicionar5')
   .click(() => {
      for(let i = 0; i < 5; i++) {
         r = Math.floor(Math.random() * 255)
         g = Math.floor(Math.random() * 255)
         b = Math.floor(Math.random() * 255)
         $("<div class='subcaixa' style=' background-color: rgb("+r+", "+g+", "+b+") '></div>").appendTo($('#caixa'))
            // AppendTo = Ser inserido no elemento
      }
   })


