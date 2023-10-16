$('#bloco').click(() => {
   $('#texto').text('Clicado no Quadrado')
})

$('#bloco').mouseenter(() => {
   $('#texto').text('Mouse entrou no Quadrado')
})

$('#bloco').mouseleave(() => {
   $('#texto').text('Mouse saiu do Quadrado')
})

$('#bloco').mousemove(() => {
   $('#texto').text('Movendo sobre o Quadrado')
})

// $('#texto').text('CFB Cursos')

$('#nome').keyup(() => {
   $('#texto').text($('#nome').val())
})

