// (38) Usando a Funcao Clone para Clonar Elementos

$('#btnClonar')
   .click(() => {
      $('#caixa').clone().appendTo('#repositorio')
   })