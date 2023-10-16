// (37) Funcao toggleClass para Adicionar e Remover Classe CSS pelo jQuery


   let alert = setInterval(() => (
      $('#caixa').toggleClass('alerta') // Se a plasse ja exisit no elemento ele remove, se não existir ele adiciona
   ), 1000)