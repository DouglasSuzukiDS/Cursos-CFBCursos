// (48) Aprendendo sobre a Função Get
// Para pegar o event em ArrowFunction(E) se usa e.currentTarget
// Para pegar o event em Function() normal se usa o this

$('#btn_get')
.click(() => {
      /*let el = $('p').get() // Retorna o grupo de elementos
      console.log(el[2].id)*/
      $('#elementos').append($('p').get())
   })