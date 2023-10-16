$('div').click(() => { alert('Evento disparado na DIV') })

$('p').click((event) => {
   event.stopPropagation()
   alert('Evento disparado no P') 
})

$('span').click((event) => { 
   event.stopPropagation()
   alert('Evento disparado no SPAN')
})