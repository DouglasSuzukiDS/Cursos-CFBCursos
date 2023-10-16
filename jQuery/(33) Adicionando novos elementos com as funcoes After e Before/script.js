// (33) Adicionando novos elementos com as funções After e Before

let r, g, b
let num = 0

$('#btnAdicionarAntes')
   .click(() => {
      r = Math.floor(Math.random() * 255)
      g = Math.floor(Math.random() * 255)
      b = Math.floor(Math.random() * 255)
      $('#caixa').before("<div class='subcaixa' style=' background-color: rgb("+r+", "+g+", "+b+") '>"+num+"</div>")
         // Prepend = Adiciona o elemento no inicio
      num++
   })

$('#btnAdicionarDepois')
   .click(() => {
      r = Math.floor(Math.random() * 255)
      g = Math.floor(Math.random() * 255)
      b = Math.floor(Math.random() * 255)
      $('#caixa').after("<div class='subcaixa' style=' background-color: rgb("+r+", "+g+", "+b+") '>"+num+"</div>")
      num++
   })

   $('#btnAdicionarTextoAntes')
   .click(() => {
      $('#caixa2').before(" Curso de jQuery ANTES ")
         // Prepend = Adiciona o elemento no inicio
   })

   $('#btnAdicionarTextoDepois')
   .click(() => {
      $('#caixa2').after(" Curso de jQuery Depois ")
   })


