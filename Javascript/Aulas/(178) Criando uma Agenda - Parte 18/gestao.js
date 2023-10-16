const dados = document.querySelector('#dados')
const fundoPopUp = document.querySelector('#fundoPopUp')
const btn_gravar = document.querySelector('#btn_gravar')
const btn_cancelar = document.querySelector('#btn_cancelar')
const f_id = document.querySelector('#f_id')
const f_nome = document.querySelector('#f_nome')
const f_celular= document.querySelector('#f_celular')
const f_email= document.querySelector('#f_email')
const f_dtnasc= document.querySelector('#f_dtnasc')

btn_gravar.addEventListener('click', (evt) => {
   fundoPopUp.classList.add('ocultar')
   const endpoint = `http://localhost:1880/atualizarcontatos/${f_id.value}/${f_nome.value}/${f_celular.value}/${f_email.value}/${f_dtnasc.value}/`

   //console.log(endpoint)

   fetch(endpoint)
      .then(res => {
         if(res.status === 200) {
            alert('Dados atualizados')
            preencherDGV()
         } else {
            alert('Erro ao atualizar dados')
         }
      })
})

btn_cancelar.addEventListener('click', (evt) => {
   fundoPopUp.classList.add('ocultar')
})

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

            imgDelete.addEventListener('click', (evt) => {
               // console.log(evt.target) // O elemento em si
               // console.log(evt.target.parentNode) // O pai
               // console.log(evt.target.parentNode.previousElementSibling) // O irmão, elemento anterior
               // console.log(evt.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML) // Pega o ID
               // console.log(evt.target.parentNode.parentNode.firstChild.innerHTML) // Pega o ID
               const id = evt.target.parentNode.parentNode.firstChild.innerHTML
               removerContato(id)
            })

            c6.appendChild(imgDelete)

            const imgEditar = document.createElement('img')
            imgEditar.setAttribute('src', 'edit.svg')
            imgEditar.setAttribute('class', 'iconeOP')

            imgEditar.addEventListener('click', (evt) => {
               fundoPopUp.classList.remove('ocultar')
               console.log(evt.target.parentNode.parentNode.childNodes) // Retorna os filhos do elemento
               const dados = [...evt.target.parentNode.parentNode.childNodes]

               f_id.value = dados[0].innerHTML
               f_nome.value = dados[1].innerHTML
               f_celular.value = dados[2].innerHTML
               f_email.value = dados[3].innerHTML
               f_dtnasc.value = dados[4].innerHTML.split('T')[0]
            })

            c6.appendChild(imgEditar)

            linha.appendChild(c6)

            dados.appendChild(linha)
         })
      })
}

preencherDGV()

const removerContato = (id) => {
   const endpoint = `http://localhost:1880/deletarcontatos/${id}`
   fetch(endpoint, {
      method: 'DELETE'
   })
      .then(res => {
         if(res.status === 200) {
            // Rotina para remover 
            preencherDGV()
         } else {
            alert('erro')
         }
      })
      .catch(err => console.log(err))
}