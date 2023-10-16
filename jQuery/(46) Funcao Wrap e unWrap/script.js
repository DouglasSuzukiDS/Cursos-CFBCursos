// (46) Função Wrap e unWrap
// Para pegar o event em ArrowFunction(E) se usa e.currentTarget
// Para pegar o event em Function(THIS) normal se usa o this

let elementos_p = $('p')
$('#bt_pacote')
   .click(() => {
      if(elementos_p.parent().is('div')) {
         elementos_p.unwrap() // Desempacotar, tira o pai
      } else {
         elementos_p.wrap('<div class="pacote"></div>') // Empacota, adiciona o pai
      }
   })

$('#bt_empacotar_tudo')
   .click(() => {
         elementos_p.wrapAll('<div class="pacote"></div>') // Empacotatudo 
   })

$('#bt_empacotar_depois')
   .click(() => {
         elementos_p.wrapInner('<div class="pacote"></div>') // Empacotatudo 
   })


