// (44) Aprendendo sobre as Funções replaceWith e replaceAll
// Para pegar o event em ArrowFunction(E) se usa e.currentTarget
// Para pegar o event em Function(THIS) normal se usa o this
$('#btn_replace1')
   .click(() => {
      // replaceAll: Seleciona os elemento da esquerda e substitui pelos elementos selecionados da direita
      $('<p>Trocado</p>').replaceAll('.cor')
   })

$('#btn_replace2')
   .click((e) => {
      $('<div>' + $(e.currentTarget).text() + '</div>').replaceAll(e.currentTarget)
   })

$('#btn_replace3')
   .click((e) => {
      // replaceWith: Substitui o da direita pelo o da esquerda
      $('.cor').replaceWith('<p>Trocado</p>')
   })

$('#btn_replace4')
   .click((e) => {
      // replaceWith: Substitui o da direita pelo o da esquerda
      $(e.currentTarget).replaceWith('<div>' + $(e.currentTarget).text() + '</div>')
   })
