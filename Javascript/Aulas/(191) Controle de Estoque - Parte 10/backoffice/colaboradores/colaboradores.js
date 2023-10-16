const dadosGrid = document.querySelector('#dadosGrid')

const endpoint_todosColaboradores = `http://localhost:1880/todosusuarios`

fetch(endpoint_todosColaboradores)
   .then(res => res.json())
   .then(res => {
      console.log(res)
      dadosGrid.innerHTML = ''
      res.forEach(e => {
         const divLinha = document.createElement('div')
         divLinha.setAttribute('class', 'linhaGrid')

         const divC1 = document.createElement('div')
         divC1.setAttribute('class', 'colunaLinhaGrid c1')
         divC1.innerHTML = e.n_usuario_usuario
         divLinha.appendChild(divC1)

         const divC2 = document.createElement('div')
         divC2.setAttribute('class', 'colunaLinhaGrid c2')
         divC2.innerHTML = e.s_nome_usuario
         divLinha.appendChild(divC2)

         const divC3 = document.createElement('div')
         divC3.setAttribute('class', 'colunaLinhaGrid c3')
         divC3.innerHTML = e.n_tipoUsuario_tipoUsuario
         divLinha.appendChild(divC3)

         const divC4 = document.createElement('div')
         divC4.setAttribute('class', 'colunaLinhaGrid c4')
         divC4.innerHTML = e.c_status_usuario
         divLinha.appendChild(divC4)

         const divC5 = document.createElement('div')
         divC5.setAttribute('class', 'colunaLinhaGrid c5')
         divLinha.appendChild(divC5)

         dadosGrid.appendChild(divLinha)
      })
   })