$('#btn_aumentar').click(
   function() {
      $('#caixa').animate(
         { width: '500px', height: "500px" }, // Aqui é feito o aumento ao mesmo tempo
         { duration: 3000 } // Tempo da animação
      ) 
   }
)

$('#btn_diminuir').click(
   function() {
      $('#caixa')
         .animate(
            { width: '200px' }, 
            { duration: 200 }
         )
         .animate(
            { height: '200px' },
            { duration: 200}
         ) // Assim executa apos o termino da outra
   }
)


$('#btn_direita').click(
   function() {
      $('#caixa').animate(
         { left: "500px"  }, 
         { duration: 1000, complete: () => { alert('Movimentação terminou') } } // Tempo da animação
      ) 
   }
)


$('#btn_esquerda').click(
   function() {
      $('#caixa').animate(
         { left: "0px"  }, 
         { duration: 1000 }  // Tempo da animação
      ) 
   }
)

