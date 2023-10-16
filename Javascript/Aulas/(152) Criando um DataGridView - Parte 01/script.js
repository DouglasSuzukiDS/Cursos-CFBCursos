// (152) Criando um DataGridView - Parte 01
const endpoint = 'produtos.json'

const configDGV = {
   endpoint: 'produtos.json'
}

const dataGridView = () => {
   fetch(configDGV.endpoint)
      .then(res => res.json())
      .then(res => console.log(res))
}
