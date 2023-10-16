// (156) Criando um DataGridView - Parte 05

const configDGV = {
   endpoint: 'produtos.json',
   idDestino: 'dgvDados'
}

const dgv = (configDGV) => {
   const dgvDados = document.getElementById(configDGV.idDestino)
   dgvDados.innerHTML = ''

   fetch(configDGV.endpoint)
      .then(res => res.json())
      .then(res => {
         res.forEach(el => {
            const dgvLinha = document.createElement('div')
            dgvLinha.setAttribute('class', 'dgvLinha')

            const c1 = document.createElement('div')
            c1.setAttribute('class','coluna c1')
            c1.innerHTML = el.id
            dgvLinha.appendChild(c1)

            const c2 = document.createElement('div')
            c2.setAttribute('class', 'coluna c2')
            c2.innerHTML = el.produto
            dgvLinha.appendChild(c2)

            const c3 = document.createElement('div')
            c3.setAttribute('class', 'coluna c3')
            c3.innerHTML = el.marca
            dgvLinha.appendChild(c3)

            const c4 = document.createElement('div')
            c4.setAttribute('class', 'coluna c4')
            c4.innerHTML = el.modelo
            dgvLinha.appendChild(c4)

            const c5 = document.createElement('div')
            c5.setAttribute('class','coluna c5')
            dgvLinha.appendChild(c5)

            const imgDelete = document.createElement('img')
            imgDelete.setAttribute('class', 'dgvIcone')
            imgDelete.setAttribute('src', 'Deletar.svg')
            c5.appendChild(imgDelete)

            const imgEditar = document.createElement('img')
            imgEditar.setAttribute('class', 'dgvIcone')
            imgEditar.setAttribute('src', 'Editar.svg')
            c5.appendChild(imgEditar)

            const imgExibir = document.createElement('img')
            imgExibir.setAttribute('class', 'dgvIcone')
            imgExibir.setAttribute('src', 'Exibir.svg')
            c5.appendChild(imgExibir)

            dgvDados.appendChild(dgvLinha)
         })
         console.log(res)
      })
}

dgv(configDGV)
