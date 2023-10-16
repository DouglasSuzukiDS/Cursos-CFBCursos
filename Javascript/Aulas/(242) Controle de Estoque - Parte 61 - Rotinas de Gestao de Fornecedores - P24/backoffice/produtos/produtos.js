import { Cxmsg } from "../../utils/cxmsg.js"

const dadosGrid = document.querySelector('#dadosGrid')
const btn_add = document.querySelector('#btn_add')
const novoProduto = document.querySelector('#novoProduto')

const f_codProd = document.querySelector('#f_codProd')
const f_descProd = document.querySelector('#f_descProd')
const f_tipoProd = document.querySelector('#f_tipoProd')
const f_fornProd = document.querySelector('#f_fornProd')
const f_statusProd = document.querySelector('#f_statusProd')

const btn_fecharPopUp = document.querySelector('#btn_fecharPopUp')
const btn_fecharPopUpPesq = document.querySelector('#btn_fecharPopUpPesq')
const btn_gravarPopUp = document.querySelector('#btn_gravarPopUp')
const btn_cancelarPopUp = document.querySelector('#btn_cancelarPopUp')
const f_qtdeProd = document.querySelector('#f_qtdeProd')
const img_foto = document.querySelector('#img_foto')
const f_filtragem = document.querySelector('#f_filtragem')
const pesquisa = document.querySelector('#pesquisa')
const btn_pesq = document.querySelector('#btn_pesq')
const f_pesq = document.querySelector('#f_pesq')
const f_pesqId = document.querySelector('#f_pesqId')
const f_pesqNome = document.querySelector('#f_pesqNome')
const btn_pesquisar = document.querySelector('#btn_pesquisar')
const btn_listarTudo = document.querySelector('#btn_listarTudo')

const movEstoque = document.querySelector('#movEstoque')

// n => Novo Produto e => Editar Produto
let modoJanela = 'n' 

const serv = sessionStorage.getItem('servidor_nodered')
// console.log(serv)

const listaTiposProd = () => {
   const endpoint_tiposProd = `${serv}/tiposprod`

   fetch(endpoint_tiposProd)
   .then(res => res.json())
   .then(res => {
      // console.log(res)
      f_tipoProd.innerHTML = ''
      res.forEach(e => {
         const opt = document.createElement('option')

         opt.setAttribute('value', e.n_tipoproduto_tipoproduto)
         opt.innerHTML = e.s_desc_tipoproduto

         f_tipoProd.appendChild(opt)
      })
   })
}

const listaFornProd = () => {
   const endpoint_fornProd = `${serv}/fornprod`

   fetch(endpoint_fornProd)
   .then(res => res.json())
   .then(res => {
      // console.log(res)
      f_fornProd.innerHTML = ''
      res.forEach(e => {
         const opt = document.createElement('option')

         opt.setAttribute('value', e.n_fornecedor_fornecedor)
         opt.innerHTML = e.s_desc_fornecedor

         f_fornProd.appendChild(opt)
         
      })
   })
}

listaFornProd()
listaTiposProd()

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

      const endpointPesq = `${serv}/pesquisaprod/${tipo}/${f_pesq.value}`
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
            texto: 'Digite o nome ou ID da Produto',
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
   carregarTodosProds()
})

const carregarTodosProds = () => {
   const endpoint_todosProdutoes = `${serv}/todosprodutos`
   fetch(endpoint_todosProdutoes)
      .then(res => res.json())
      .then(res => {
         // console.log(res)
         dadosGrid.innerHTML = ''
         res.forEach(e => {
            criarLinha(e)
         })
      })
}

carregarTodosProds()

const criarLinha = (e) => {
   const divLinha = document.createElement('div')
         divLinha.setAttribute('class', 'linhaGrid')

         const divC1 = document.createElement('div')
         divC1.setAttribute('class', 'colunaLinhaGrid c1')
         divC1.innerHTML = e.n_cod_produto
         divLinha.appendChild(divC1)

         const divC2 = document.createElement('div')
         divC2.setAttribute('class', 'colunaLinhaGrid c2')
         divC2.innerHTML = e.s_desc_produto
         divLinha.appendChild(divC2)

         const divC3 = document.createElement('div')
         divC3.setAttribute('class', 'colunaLinhaGrid c3')
         divC3.innerHTML = e.n_qtde_produto
         divLinha.appendChild(divC3)

         const divC4 = document.createElement('div')
         divC4.setAttribute('class', 'colunaLinhaGrid c4')
         divC4.innerHTML = e.c_status_produto
         divLinha.appendChild(divC4)

         const divC5 = document.createElement('div')
         divC5.setAttribute('class', 'colunaLinhaGrid c5')
         divLinha.appendChild(divC5)

         const imgStatus = document.createElement('img')
         if(e.c_status_produto === 'A') {
            imgStatus.setAttribute('src', '../../imgs/On.svg')
         } else {
            imgStatus.setAttribute('src', '../../imgs/Off.svg')
         }

         imgStatus.setAttribute('data-idprod', e.n_cod_produto)
         imgStatus.setAttribute('class', 'icone_op')

         imgStatus.addEventListener('click', (evt) => {
            // console.log(evt.target)
            const idprod = evt.target.dataset.idprod

            if(evt.target.getAttribute('src') === '../../imgs/On.svg') {
               const endpoint_mudarStatus = `${serv}/mudarStatusProd/${idprod}/I`
               // console.log(evt.target.getAttribute('src'))
               
               fetch(endpoint_mudarStatus)
                  .then(res => {
                     console.log(res)
                     if(res.status === 200) {
                        evt.target.setAttribute('src', '../../imgs/Off.svg')
                        evt.target.parentNode.parentNode.childNodes[3].innerHTML = 'I'
                     }
                  })
                  .catch(err => console.log(err, 'A'))
            } else {
               const endpoint_mudarStatus = `${serv}/mudarStatusProd/${idprod}/A`
               
               fetch(endpoint_mudarStatus)
                  .then(res => {
                     if(res.status === 200) {
                        evt.target.setAttribute('src', '../../imgs/On.svg')
                        evt.target.parentNode.parentNode.childNodes[3].innerHTML = 'A'
                     }
                  })
                  .catch(err => console.log(err, 'B'))
            }
         })

         divC5.appendChild(imgStatus)

         const imgEditar = document.createElement('img')
         imgEditar.setAttribute('src', '../../imgs/edit.svg')
         imgEditar.setAttribute('class', 'icone_op')

         imgEditar.addEventListener('click', (evt) => {
            // console.log(evt.target) // Retorna o elemento
            //console.log(evt.target.parentNode.parentNode.firstChild.innerHTML)
            
            const id = evt.target.parentNode.parentNode.firstChild.innerHTML
            modoJanela = 'e'
            document.getElementById('tituloPopUp').innerHTML = 'Editar Produto'

            let endpoint = `${serv}/dadosprod/${id}`
            fetch(endpoint)
               .then(res => res.json())
               .then(res => {
                  console.log(res)
                  btn_gravarPopUp.setAttribute('data-idprod', id)
                  f_codProd.value = res[0].n_cod_produto
                  f_descProd.value = res[0].s_desc_produto                 
                  f_qtdeProd.value = res[0].n_qtde_produto                 
                  f_tipoProd.value = res[0].n_tipoProduto_tipoProduto
                  f_fornProd.value = res[0].n_fornecedor_fornecedor
                  f_statusProd.value = res[0].c_status_produto

                  novoProduto.classList.remove('ocultarPopUp')
               })
         })
         
         divC5.appendChild(imgEditar)

         const imgMovimentar = document.createElement('img')
         imgMovimentar.setAttribute('src', '../../imgs/Mov_B.svg')
         imgMovimentar.setAttribute('class', 'icone_op')
         imgMovimentar.setAttribute('title', 'Movimentação do Produto')
         imgMovimentar.addEventListener('click', (evt) => {
            movEstoque.classList.remove('ocultarPopUp')
         })

         divC5.appendChild(imgMovimentar)

         dadosGrid.appendChild(divLinha)
}

btn_add.addEventListener('click', (evt) => {
   modoJanela = 'n'
   document.getElementById('tituloPopUp').innerHTML = 'Nova Produto'
   novoProduto.classList.remove('ocultarPopUp')

   f_codProd.value = ''
   f_descProd.value = ''
   f_qtdeProd.value = '1'
   f_tipoProd.value = '-1'
   f_fornProd.value = '-1'
   f_statusProd.value = 'A'

   listaTiposProd()
   listaFornProd()
})

btn_fecharPopUp.addEventListener('click', (evt) => {
   novoProduto.classList.add('ocultarPopUp')
   pesquisa.classList.add('ocultarPopUp')
})

btn_gravarPopUp.addEventListener('click', (evt) => {
   const dados = {
      n_cod_produto: f_codProd.value,
      n_tipoProduto_tipoProduto: f_tipoProd.value,
      s_desc_produto: f_descProd.value,
      n_fornecedor_fornecedor: f_fornProd.value,
      n_qtde_produto: f_qtdeProd.value,
      c_status_produto: f_statusProd.value,
   }

   console.log(dados)

   const cab = {
      method: 'POST',
      body: JSON.stringify(dados)
   }
   
   let endpointNovoEditarColab = null

   if(modoJanela == 'n') {
      endpointNovoEditarColab = `${serv}/novoprod`
   } else {
      endpointNovoEditarColab = `${serv}/editarprod`
   }

   fetch(endpointNovoEditarColab, cab)
      .then(res => {
         if(res.status === 200) {
            if(modoJanela == 'n') {
               // alert('Novo Produto gravado')
               let config = {
                  titulo: 'Ok',
                  texto: 'Produto cadastrado com sucesso',
                  cor: '#00F',
                  tipo: 'ok',
                  ok: () => {},
                  sim: () => {},
                  nao: () => {}
               }
      
               Cxmsg.mostrar(config)
   
               f_codProd.value = ''
               f_descProd.value = ''
               f_qtdeProd.value = '1'
               f_tipoProd.value = '-1'
               f_fornProd.value = '-1'
               f_statusProd.value = 'A'

               carregarTodosProds()

            } else {
              // alert('Produto editado com sucesso')
              let config = {
                  titulo: 'Ok',
                  texto: 'Produto editado com sucesso',
                  cor: '#00F',
                  tipo: 'ok',
                  ok: () => {},
                  sim: () => {},
                  nao: () => {}
               }
      
               Cxmsg.mostrar(config)
               carregarTodosProds()
            }
         } else {
            // alert('Erro ao gravar novo Produto')
            let config = {
               titulo: 'Erro',
               texto: 'Erro ao gravar nova pessoa',
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

   // novoProduto.classList.add('ocultarPopUp')
})

btn_cancelarPopUp.addEventListener('click', (evt) => {
   novoProduto.classList.add('ocultarPopUp')
})

f_qtdeProd.addEventListener('change', (evt) => {
   // console.log(evt.target)
   converter_imagem_b64(img_foto, evt.target.files[0])
})