// (42) Alterando o Top e Left do elemento com o a Função Offset

$('#btnPosicao')
   .click(() => {
      // position() = Retorna a Posição
      // offset() = Permite mudar o valor
      let pt = $('#caixa').position().top
      let pl = $('#caixa').position().left

      let ot = $('#caixa').offset().top
      let ol = $('#caixa').offset().left

      alert('Top: ' + pt + ' | Left: ' + pl + '\nTop Offset: ' + ot + ' | Left Offset ' + ol)
   })

   $('#top').change((e) => {
      let valor = document.getElementById(e.target.id).value
      $('#caixa').offset({'top': valor})
   })

   $('#left').change((e) => {
      let valor = document.getElementById(e.target.id).value
      $('#caixa').offset({'left': valor})
   })
