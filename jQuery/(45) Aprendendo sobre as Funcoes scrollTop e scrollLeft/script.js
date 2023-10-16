// (45) Aprendendo sobre as Funções scrollTop e scrollLeft
// Para pegar o event em ArrowFunction(E) se usa e.currentTarget
// Para pegar o event em Function(THIS) normal se usa o this
$('#bt_rolar_left')
   .click(() => {
      $('#texto').scrollLeft(15) // Leva para a Posição
   })

$('#bt_rolar_top')
   .click(() => {
      $('#texto').scrollTop(150) // Leva para a Posição
   })

$('#bt_pos_left')
   .click(() => {
      alert($('#texto').scrollLeft()) // Retorna o valor da Posição
   })

$('#bt_pos_top')
   .click(() => {
      alert($('#texto').scrollTop()) // Retorna o valor da Posição
   })

$('#bt_reset_pos')
   .click(() => {
      $('#texto').scrollLeft(0).scrollTop(0)
   })

