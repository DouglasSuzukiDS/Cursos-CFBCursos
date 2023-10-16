const dadosGrid = document.querySelector('#dadosGrid')
const btn_add = document.querySelector('#btn_add')
const novoColaborador = document.querySelector('#novoColaborador')
const btn_fecharPopUp = document.querySelector('#btn_fecharPopUp')
const btn_gravarPopUp = document.querySelector('#btn_gravarPopUp')
const btn_cancelarPopUp = document.querySelector('#btn_cancelarPopUp')
const telefones = document.querySelector('#telefones')
const f_fone = document.querySelector('#f_fone')
const f_nome = document.querySelector('#f_nome')
const f_tipoColab = document.querySelector('#f_tipoColab')
const f_status = document.querySelector('#f_status')


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

const endpoint_tiposColab = `http://localhost:1880/tiposColab`
fetch(endpoint_tiposColab)
   .then(res => res.json())
   .then(res => {
      // console.log(res)
      f_tipoColab.innerHTML = ''
      res.forEach(e => {
         const opt = document.createElement('option')

         opt.setAttribute('value', e.n_tipoUsuario_tipoUsuario)
         opt.innerHTML = e.s_desc_tipoUsuario

         f_tipoColab.appendChild(opt)
      })
   })

btn_add.addEventListener('click', (evt) => {
   novoColaborador.classList.remove('ocultarPopUp')
})

btn_fecharPopUp.addEventListener('click', (evt) => {
   novoColaborador.classList.add('ocultarPopUp')
})

btn_gravarPopUp.addEventListener('click', (evt) => {
   const tels = [...document.querySelectorAll('.numTel')]

   let numTels = []

   tels.forEach(t => {
      numTels.push(t.innerHTML)
   })

   // console.log(numTels)

   const dados = {
      s_nome_usuario: f_nome.value,
      s_tipoUsuario: f_tipoColab.value,
      c_status_usuario: f_status.value,
      numtelefones: numTels
   }

   // console.log(dados)

   const endpoint = `http://localhost:1880/novocolab`
   const cab = {
      method: 'POST',
      body: JSON.stringify(dados)
   }

   fetch(endpoint, cab)
      .then(res => {
         if(res.status === 200) {
            alert('Novo colaborador gravado')
         } else {
            alert('Erro ao gravar novo colaborador')
         }
      })

   // novoColaborador.classList.add('ocultarPopUp')
})

btn_cancelarPopUp.addEventListener('click', (evt) => {
   novoColaborador.classList.add('ocultarPopUp')
})

f_fone.addEventListener('keyup', (evt) => {
   // console.log('teste')
   if(evt.key === 'Enter') {
      // console.log(evt.target.value)

      if(evt.target.value.length >= 8) {

         const divTel = document.createElement('div')
         divTel.setAttribute('class', 'tel')
         
         const numTel = document.createElement('div')
         numTel.setAttribute('class', 'numTel')
         numTel.innerHTML = evt.target.value
         divTel.appendChild(numTel)
   
         const delTel = document.createElement('img')
         delTel.setAttribute('src', '../../imgs/Delete.svg')
         delTel.setAttribute('alt', 'Deletar Telefone')
         delTel.setAttribute('class', 'delTel')
         delTel.addEventListener('click', (evt) => {
            // console.log(evt.target.parentNode)
            evt.target.parentNode.remove()
         })
         divTel.appendChild(delTel)

         telefones.appendChild(divTel)
   
         evt.target.value = ''
      } else {
         alert('Número de telefone inválido')
      }

   }
})