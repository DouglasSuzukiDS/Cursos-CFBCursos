// (41) Pegando a Posição do Elemento com Position Top e Left

$('#btnPosicao')
   .click(() => {
      // position() = Retorna a Posição
      let t = $('#caixa').position().top
      let l = $('#caixa').position().left
      alert('Top: ' + t + ' | Left: ' + l)
   })

   $('#top').change((e) => {
      let valor = document.getElementById(e.target.id).value
      $('#caixa').css({'top': valor + 'px'})
   })

   $('#left').change((e) => {
      let valor = document.getElementById(e.target.id).value
      $('#caixa').css({'left': valor + 'px'})
   })
