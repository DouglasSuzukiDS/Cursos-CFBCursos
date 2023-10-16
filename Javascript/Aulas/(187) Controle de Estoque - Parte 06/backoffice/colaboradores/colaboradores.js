const endpoint_todosColaboradores = `http://localhost:1880/todosusuarios`

fetch(endpoint_todosColaboradores)
   .then(res => res.json())
   .then(res => {
      console.log(res)
   })