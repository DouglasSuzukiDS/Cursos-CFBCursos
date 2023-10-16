let pmx = 0
let pmy = 0

$(document).mousemove((event) => {
   //$('#texto').text('Mouse X: ' + event.pageX + 'px' + ', mouse Y:' + event.pageY + 'px')

   pmx = event.pageX
   pmy = event.pageY

   if(pmx > 500)
      console.log('Pos X > que 500px')

   //$('#texto').text('Mouse X: ' + pmx + 'px' + ', mouse Y:' + pmy + 'px')
})



