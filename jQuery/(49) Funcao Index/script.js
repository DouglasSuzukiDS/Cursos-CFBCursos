// (49) Função Index
// Para pegar o event em ArrowFunction(E) se usa e.currentTarget
// Para pegar o event em Function() normal se usa o this

// A função index retorna a posição(em array*) do elemento em relação ao parent 

$('p')
   .click((e) => {
      alert($(e.currentTarget).index())
   })

$('h4')
   .click(function() {
      alert($(this).index())
   })

