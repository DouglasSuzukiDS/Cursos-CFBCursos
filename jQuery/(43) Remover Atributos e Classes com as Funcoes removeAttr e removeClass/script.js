// (43) Remover Atributos e Classes com as Funções removeAttr e removeClass

$('#btnRemoverAtributo')
   .click(() => {
      // removeAttribute() = Remove o Atributo
      $('#caixa').removeAttr('style')
   })

$('#btnRemoverClasse')
.click(() => {
   // removeClass() = Remove a Classe
   $('#caixa').removeClass('borda')
})

$('#btnAdicionarClasse')
.click(() => {
   // addClass() = Adiciona a Classe
   $('#caixa').addClass('borda')
})

$('#btnPosicao')
   .click(() => {



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
