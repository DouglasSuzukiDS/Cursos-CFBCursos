/*$('#bloco').on('click dblclick', () => {
   $('#texto').text('Clique no Quadrado')
})*/

$('#bloco').on({
   click: () => $('#texto').text('Clique no Quadrado'),
   mouseenter: () => $('#texto').text('Mouse entrou no Quadrado'),
   mouseleave: () => $('#texto').text('Mouse saiu do Quadrado'),
   dblclick: () => $('#texto').text('Clique duplo no Quadrado')
})

//$('#bloco').trigger('click') // Aciona o evento

$('#bloco2').click(() => {
   $('#bloco').trigger('click')
})
 


