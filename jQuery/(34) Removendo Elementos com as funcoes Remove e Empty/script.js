// (34) Removendo Elementos com as funções Remove e Empty

let r, g, b
let num = 1

$('#btnAdicionar')
   .click(() => {
      r = Math.floor(Math.random() * 255)
      g = Math.floor(Math.random() * 255)
      b = Math.floor(Math.random() * 255)
      $('#caixa').append("<div id='d" + num + "' class='subcaixa' style=' background-color: rgb("+r+", "+g+", "+b+") '>"+num+"</div>")
         // Prepend = Adiciona o elemento no inicio
      num++
   })

$('#btnRemover')
   .click(() => {
      //let div = $('#d0')
      // $(div).remove()
      $("#d" + (num - 1)).remove()
      num--
   })

$('#btnRemoverConteudo')
   .click(() => {
      $("#caixa").empty() // Elimina todos os filhos do elemento
      
   })