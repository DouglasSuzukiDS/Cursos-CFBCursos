// (47) Metodo Find para encontrar Elementos em Arrays 
const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

//const elementos_array = [10, 5, 8, 2, 9, 15, 20]
const elementos_array = ['html', 'css', 'javascript']
p_array.innerHTML = "[ " + elementos_array + " ]"

btnPesquisar.addEventListener('click', (evt) => {
   /*resultado.innerHTML = 'Valor não encontrado'
   const ret = elementos_array.find((e, i) => { // True or False
      if(e == txt_pesquisar.value) {
         resultado.innerHTML = 'Valor encontrado ' + e +  ' na posição ' + i
         return e
      }
   })*/

   resultado.innerHTML = 'Valor não encontrado'
   const ret = elementos_array.find((e, i) => { // True or False
      if(e.toLocaleUpperCase() == txt_pesquisar.value.toLocaleUpperCase()) {
         resultado.innerHTML = 'Valor encontrado ' + e +  ' na posição ' + i
         return e
      }
   })
   console.log(ret)
})