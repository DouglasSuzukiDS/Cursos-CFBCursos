const dados = document.querySelector('#dados')

const preencherDGV = (evt) => {
   dados.innerHTML = ''

   const endpoint = `http://localhost:1880/pesquisartodoscontatos`

   fetch(endpoint)
      .then(res => res.json())
      .then(res => {
         // console.log(res)
         res.forEach((el) => {
            // console.log(el)
            const linha = document.createElement('div')
            linha.setAttribute('class', 'linhaDados')

            const c1 = document.createElement('div')
            c1.setAttribute('class', 'coluna c1')
            c1.innerHTML = el.n_contato_contato_id
            linha.appendChild(c1)

            const c2 = document.createElement('div')
            c2.setAttribute('class', 'coluna c2')
            c2.innerHTML = el.s_nome_contato
            linha.appendChild(c2)

            const c3 = document.createElement('div')
            c3.setAttribute('class', 'coluna c3')
            c3.innerHTML = el.s_celular_contato
            linha.appendChild(c3)

            const c4 = document.createElement('div')
            c4.setAttribute('class', 'coluna c4')
            c4.innerHTML = el.s_email_contato
            linha.appendChild(c4)

            const c5 = document.createElement('div')
            c5.setAttribute('class', 'coluna c5')
            c5.innerHTML = el.dt_dtnasc_contato
            linha.appendChild(c5)

            const c6 = document.createElement('div')
            c6.setAttribute('class', 'coluna c6 c_op')

            const imgDelete = document.createElement('img')
            imgDelete.setAttribute('src', 'delete.svg')
            imgDelete.setAttribute('class', 'iconeOP')
            c6.appendChild(imgDelete)

            const imgEditar = document.createElement('img')
            imgEditar.setAttribute('src', 'edit.svg')
            imgEditar.setAttribute('class', 'iconeOP')
            c6.appendChild(imgEditar)

            linha.appendChild(c6)

            dados.appendChild(linha)
         })
      })
}

preencherDGV()