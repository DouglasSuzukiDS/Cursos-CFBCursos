import { Cxmsg } from "../../utils/cxmsg.js"

const dadosGrid = document.querySelector('#dadosGrid')
const btn_add = document.querySelector('#btn_add')
const novoFornecedor = document.querySelector('#novoFornecedor')
const btn_fecharPopUp = document.querySelector('#btn_fecharPopUp')
const btn_fecharPopUpPesq = document.querySelector('#btn_fecharPopUpPesq')
const btn_gravarPopUp = document.querySelector('#btn_gravarPopUp')
const btn_cancelarPopUp = document.querySelector('#btn_cancelarPopUp')
const telefones = document.querySelector('#telefones')
const f_nome = document.querySelector('#f_nome')
const f_tipoColab = document.querySelector('#f_tipoColab')
const f_status = document.querySelector('#f_status')
const f_foto = document.querySelector('#f_foto')
const img_foto = document.querySelector('#img_foto')
const f_filtragem = document.querySelector('#f_filtragem')
const pesquisa = document.querySelector('#pesquisa')
const btn_pesq = document.querySelector('#btn_pesq')
const f_pesq = document.querySelector('#f_pesq')
const f_pesqId = document.querySelector('#f_pesqId')
const f_pesqNome = document.querySelector('#f_pesqNome')
const btn_pesquisar = document.querySelector('#btn_pesquisar')
const btn_listarTudo = document.querySelector('#btn_listarTudo')

// n => Novo Fornecedor e => Editar Fornecedor
let modoJanela = 'n' 

const serv = sessionStorage.getItem('servidor_nodered')
// console.log(serv)

f_filtragem.addEventListener('keyup', (evt) => {
   // console.log('up')
   const linhas = [...document.querySelectorAll('.linhaGrid')]
   let input, texto, filtragem
   input = evt.target
   filtragem = input.value.toUpperCase()

   for(let i = 0; i < linhas.length; i++) {
      texto = linhas[i].children[1].innerHTML

      if(texto.toUpperCase().indexOf(filtragem) > -1) {
         linhas[i].classList.remove('ocultarLinhaGrid')
      } else {
         linhas[i].classList.add('ocultarLinhaGrid')
      }
   }
})

btn_fecharPopUpPesq.addEventListener('click', (evt) => {
   pesquisa.classList.add('ocultarPopUp')
})

btn_pesq.addEventListener('click', (evt) => {
   pesquisa.classList.remove('ocultarPopUp')
   f_pesq.value = ''
   f_pesq.focus()
})

f_pesqId.addEventListener('click', (evt) => {
   f_pesq.value = ''
   f_pesq.focus()
})

f_pesqNome.addEventListener('click', (evt) => {
   f_pesq.value = ''
   f_pesq.focus()
})

btn_pesquisar.addEventListener('click', (evt) => {
   if(f_pesq.value !== '') {
      let tipo = null

      if(f_pesqId.checked) {
         tipo = 'id'
      } else {
         tipo = 'nome'
      }

      const endpointPesq = `${serv}/pesquisacolab/${tipo}/${f_pesq.value}`
      fetch(endpointPesq) 
         .then(res => res.json())
         .then(res => {
            // console.log(res)
            dadosGrid.innerHTML = ''

            res.forEach(e => {
               criarLinha(e)
            })
         })
         .catch(err => console.log(err))

         pesquisa.classList.add('ocultarPopUp')
   } else {
      let config = {
            titulo: 'Alerta',
            texto: 'Digite o nome ou ID do Fornecedor',
            cor: '#00F',
            tipo: 'ok',
            ok: () => {},
            sim: () => {},
            nao: () => {}
      }

      Cxmsg.mostrar(config)
      // alert('Preencha o campo de pesquisa')
      f_pesq.focus()
   }
})

btn_listarTudo.addEventListener('click', (evt) => {
   carregarTodosFornecedores()
})

const carregarTodosFornecedores = () => {
   const endpoint = `${serv}/todosfornecedores`
   fetch(endpoint)
      .then(res => res.json())
      .then(res => {
         // console.log(res)
         dadosGrid.innerHTML = ''
         res.forEach(e => {
            criarLinha(e)
         })
      })
}

carregarTodosFornecedores()

const criarLinha = (e) => {
   const divLinha = document.createElement('div')
         divLinha.setAttribute('class', 'linhaGrid')

         const divC1 = document.createElement('div')
         divC1.setAttribute('class', 'colunaLinhaGrid c1')
         divC1.innerHTML = e.n_fornecedor_fornecedor
         divLinha.appendChild(divC1)

         const divC2 = document.createElement('div')
         divC2.setAttribute('class', 'colunaLinhaGrid c2')
         divC2.innerHTML = e.s_desc_fornecedor
         divLinha.appendChild(divC2)

         const divC3 = document.createElement('div')
         divC3.setAttribute('class', 'colunaLinhaGrid c3')
         divC3.innerHTML = e.c_status_fornecedor
         divLinha.appendChild(divC3)

         const divC4 = document.createElement('div')
         divC4.setAttribute('class', 'colunaLinhaGrid c4')
         divLinha.appendChild(divC4)

         const imgStatus = document.createElement('img')
         if(e.c_status_fornecedor === 'A') {
            imgStatus.setAttribute('src', '../../imgs/On.svg')
         } else {
            imgStatus.setAttribute('src', '../../imgs/Off.svg')
         }

         imgStatus.setAttribute('data-idfornecedor', e.n_fornecedor_fornecedor)
         imgStatus.setAttribute('class', 'icone_op')

         imgStatus.addEventListener('click', (evt) => {
            // console.log('entrou')
            const idfornecedor = evt.target.dataset.idfornecedor

            if(evt.target.getAttribute('src') === '../../imgs/On.svg') {
               const endpoint_mudarStatus = `${serv}/mudarStatusFornecedor/${idfornecedor}/I`
               // console.log(evt.target.getAttribute('src'))
               
               fetch(endpoint_mudarStatus)
                  .then(res => {
                     console.log(res)
                     if(res.status === 200) {
                        evt.target.setAttribute('src', '../../imgs/Off.svg')
                        evt.target.parentNode.parentNode.childNodes[2].innerHTML = 'I'
                     }
                  })
                  .catch(err => console.log(err, 'A'))
            } else {
               const endpoint_mudarStatus = `${serv}/mudarStatusFornecedor/${idfornecedor}/A`
               
               fetch(endpoint_mudarStatus)
                  .then(res => {
                     if(res.status === 200) {
                        evt.target.setAttribute('src', '../../imgs/On.svg')
                        evt.target.parentNode.parentNode.childNodes[2].innerHTML = 'A'
                     }
                  })
                  .catch(err => console.log(err, 'B'))
            }
         })

         divC4.appendChild(imgStatus)

         const imgEditar = document.createElement('img')
         imgEditar.setAttribute('src', '../../imgs/edit.svg')
         imgEditar.setAttribute('class', 'icone_op')

         imgEditar.addEventListener('click', (evt) => {
            // console.log(evt.target) // Retorna o elemento
            //console.log(evt.target.parentNode.parentNode.firstChild.innerHTML)
            
            const id = evt.target.parentNode.parentNode.firstChild.innerHTML
            modoJanela = 'e'
            document.getElementById('tituloPopUp').innerHTML = 'Editar Fornecedor'

            let endpoint = `${serv}/dadoscolab/${id}`
            fetch(endpoint)
               .then(res => res.json())
               .then(res => {
                  // console.log(res)
                  btn_gravarPopUp.setAttribute('data-idfornecedor', id)
                  f_nome.value = res[0].s_desc_fornecedor
                  f_status.value = res[0].c_status_fornecedor
                  img_foto.src = res[0].s_logo_fornecedor
                  novoFornecedor.classList.remove('ocultarPopUp')

                  if(img_foto.src === '' || img_foto.src === '#') {
                     img_foto.classList.add('esconderElemento')
                  } else {
                     img_foto.classList.remove('esconderElemento')
                  }
               })
               

         })
         
         divC4.appendChild(imgEditar)

         const imgDeletar = document.createElement('img')
         imgDeletar.setAttribute('src', '../../imgs/delete.svg')
         imgDeletar.setAttribute('class', 'icone_op')
         divC4.appendChild(imgDeletar)

         dadosGrid.appendChild(divLinha)
}

btn_add.addEventListener('click', (evt) => {
   modoJanela = 'n'
   document.getElementById('tituloPopUp').innerHTML = 'Novo Fornecedor'
   novoFornecedor.classList.remove('ocultarPopUp')
   img_foto.classList.add('esconderElemento')

   f_nome.value = ''
   f_status.value = ''
   f_foto.value = ''
   img_foto.setAttribute('src', '#')
})

btn_fecharPopUp.addEventListener('click', (evt) => {
   novoFornecedor.classList.add('ocultarPopUp')
   pesquisa.classList.add('ocultarPopUp')
})

btn_gravarPopUp.addEventListener('click', (evt) => {
   const dados = {
      n_fornecedor_fornecedor: evt.target.dataset.idfornecedor,
      s_desc_fornecedor: f_nome.value,
      c_status_fornecedor: f_status.value,
      s_logo_fornecedor: img_foto.getAttribute('src')
   }

   //console.log(dados)

   const cab = {
      method: 'POST',
      body: JSON.stringify(dados)
   }
   
   let endpointNovoEditarColab = null

   if(modoJanela == 'n') {
      endpointNovoEditarColab = `${serv}/novoforn`
   } else {
      endpointNovoEditarColab = `${serv}/editarforn`
   }

   fetch(endpointNovoEditarColab, cab)
      .then(res => {
         if(res.status === 200) {
            if(modoJanela == 'n') {
               // alert('Novo Fornecedor gravado')
               let config = {
                  titulo: 'Ok',
                  texto: 'Novo Fornecedor gravado',
                  cor: '#00F',
                  tipo: 'ok',
                  ok: () => {},
                  sim: () => {},
                  nao: () => {}
               }
      
               Cxmsg.mostrar(config)
   
               f_nome.value = ''
               f_tipoColab.value = ''
               f_status.value = ''
               f_foto.value = ''
               img_foto.setAttribute('src', '#')
               telefones.innerHTML = ''

               carregarTodosFornecedores()

            } else {
              // alert('Fornecedor editado com sucesso')
              let config = {
                  titulo: 'Ok',
                  texto: 'Fornecedor editado com sucesso',
                  cor: '#00F',
                  tipo: 'ok',
                  ok: () => {},
                  sim: () => {},
                  nao: () => {}
               }
      
               Cxmsg.mostrar(config)
            }
         } else {
            // alert('Erro ao gravar novo Fornecedor')
            let config = {
               titulo: 'Erro',
               texto: 'Erro ao gravar novo Fornecedor',
               cor: '#800',
               tipo: 'ok',
               ok: () => {},
               sim: () => {},
               nao: () => {}
            }
   
            Cxmsg.mostrar(config)
         }
      })
      .finally(() => img_foto.classList.add('esconderElemento'))

   // novoFornecedor.classList.add('ocultarPopUp')
})

btn_cancelarPopUp.addEventListener('click', (evt) => {
   novoFornecedor.classList.add('ocultarPopUp')
})

const converter_imagem_b64 = (localDestino, arquivoImg) => {
   const obj = arquivoImg
   const reader = new FileReader()
   reader.addEventListener('load', (evt) => {
      const res = reader.result
      localDestino.src = res
   })

   if(obj) {
      reader.readAsDataURL(obj)
   }
}

f_foto.addEventListener('change', (evt) => {
   // console.log(evt.target)
   converter_imagem_b64(img_foto, evt.target.files[0])
})