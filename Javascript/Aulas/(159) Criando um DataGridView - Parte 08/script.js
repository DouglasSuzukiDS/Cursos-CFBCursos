// (159) Criando um DataGridView - Parte 08

const configDGV = {
   endpoint: 'http://localhost:1880/produtos',
   idDestino: 'dgvDados'
}

const dgv = (configDGV) => {
   const dgvDados = document.getElementById(configDGV.idDestino)
   dgvDados.innerHTML = ''

   fetch(configDGV.endpoint)
      .then(res => res.json())
      .then(res => {
         console.log(res)
         res.forEach(el => {
            const dgvLinha = document.createElement('div')
            dgvLinha.setAttribute('class', 'dgvLinha')

            const c1 = document.createElement('div')
            c1.setAttribute('class','coluna c1')
            c1.innerHTML = el.n_id_produto
            dgvLinha.appendChild(c1)

            const c2 = document.createElement('div')
            c2.setAttribute('class', 'coluna c2')
            c2.innerHTML = el.s_nome_produto
            dgvLinha.appendChild(c2)

            const c3 = document.createElement('div')
            c3.setAttribute('class', 'coluna c3')
            c3.innerHTML = el.s_marca_produto
            dgvLinha.appendChild(c3)

            const c4 = document.createElement('div')
            c4.setAttribute('class', 'coluna c4')
            c4.innerHTML = el.s_modelo_produto
            dgvLinha.appendChild(c4)

            const c5 = document.createElement('div')
            c5.setAttribute('class','coluna c5')
            dgvLinha.appendChild(c5)

            const imgDelete = document.createElement('img')
            imgDelete.setAttribute('class', 'dgvIcone')
            imgDelete.setAttribute('src', 'Deletar.svg')

            imgDelete.addEventListener('click', (evt) => {
               // console.log(evt.target.parentNode.parentNode.firstChild.innerHTML)
               const id = evt.target.parentNode.parentNode.firstChild.innerHTML
               const linha = evt.target.parentNode.parentNode
               const endpoint = `http://localhost:1880/removeproduto/${id}`

               fetch(endpoint)
                  .then(res => {
                     // res.json()
                     // console.log(res)
                     if(res.status === 200) {
                        linha.remove()
                     }
                  })
                  .catch(err => console.log(err))
            })

            c5.appendChild(imgDelete)

            const imgEditar = document.createElement('img')
            imgEditar.setAttribute('class', 'dgvIcone')
            imgEditar.setAttribute('src', 'Editar.svg')
            c5.appendChild(imgEditar)

            const imgExibir = document.createElement('img')
            imgExibir.setAttribute('class', 'dgvIcone')
            imgExibir.setAttribute('src', 'Exibir.svg')

            imgExibir.addEventListener('click', evt => {
               document.querySelector('.janelaView').classList.remove('ocultar')
               const id = evt.target.parentNode.parentNode.firstChild.innerHTML
               const endpoint = `http://localhost:1880/produto/${id}`

               fetch(endpoint)
                  .then(res => res.json())
                  .then(res => {
                     // console.log(res)
                     document.querySelector('#f_id').value = res[0].n_id_produto
                     document.querySelector('#f_produto').value = res[0].s_nome_produto
                     document.querySelector('#f_marca').value = res[0].s_marca_produto
                     document.querySelector('#f_modelo').value = res[0].s_modelo_produto

                  })
                  .catch(err => console.log(err))
            })

            c5.appendChild(imgExibir)

            dgvDados.appendChild(dgvLinha)
         })
         //console.log(res)
      })
}

dgv(configDGV)

document.querySelector('#btn_ok').addEventListener('click', evt => {
   document.querySelector('.janelaView').classList.add('ocultar')
})