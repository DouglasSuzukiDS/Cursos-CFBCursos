import { Cxmsg } from "../../utils/cxmsg.js"

const serv = sessionStorage.getItem('servidor_nodered')

const verificarToken = () => {
   const token = sessionStorage.getItem('s_token_token')
   const endpoint = `${serv}/verificatoken/${token}`
   console.log(endpoint)
   fetch(endpoint)
      .then(res => res.json())
      .then(res => {
         if (res.retorno === 200) {
            // console.log('Ok')
            pagina()
         } else {
            // console.log('Não Ok')
            alert('Token Inválido')
            window.location.href = '../index.html'
            sessionStorage.removeItem('n_pessoa_pessoa')
            sessionStorage.removeItem('s_nome_pessoa')
            sessionStorage.removeItem('n_token_token')
            sessionStorage.removeItem('s_token_token')
         }
      })
}

verificarToken()

const pagina = () => {

   const dadosGrid = document.querySelector('#dadosGrid')
   const btn_add = document.querySelector('#btn_add')
   const novoFornecedor = document.querySelector('#novoFornecedor')
   const btn_fecharPopUp = document.querySelector('#btn_fecharPopUp')
   const btn_fecharPopUpPesq = document.querySelector('#btn_fecharPopUpPesq')
   const btn_fecharPopUpListaContatos = document.querySelector('#btn_fecharPopUpListaContatos')
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
   const listaContatosForn = document.querySelector('#listaContatosForn')
   const btn_listarContatosForn = document.querySelector('#btn_listarContatosForn')
   const dadosGrid_novosContatosForn = document.querySelector('#dadosGrid_novosContatosForn')
   const dadosGrid_contatosFornAdd = document.querySelector('#dadosGrid_contatosFornAdd')

   const telefonesContForn = document.querySelector('#telefonesContForn')
   const btn_fecharPopUpTelefonesContForn = document.querySelector('#btn_fecharPopUpTelefonesContForn')
   const dadosGrid_telefonesContForn = document.querySelector('#dadosGrid_telefonesContForn')

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

      for (let i = 0; i < linhas.length; i++) {
         texto = linhas[i].children[1].innerHTML

         if (texto.toUpperCase().indexOf(filtragem) > -1) {
            linhas[i].classList.remove('ocultarLinhaGrid')
         } else {
            linhas[i].classList.add('ocultarLinhaGrid')
         }
      }
   })

   btn_fecharPopUpPesq.addEventListener('click', (evt) => {
      pesquisa.classList.add('ocultarPopUp')
   })

   btn_fecharPopUpListaContatos.addEventListener('click', (evt) => {
      listaContatosForn.classList.add('ocultarPopUp')
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
      if (f_pesq.value !== '') {
         let tipo = null

         if (f_pesqId.checked) {
            tipo = 'id'
         } else {
            tipo = 'nome'
         }

         const endpointPesq = `${serv}/pesquisaforn/${tipo}/${f_pesq.value}`
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
            ok: () => { },
            sim: () => { },
            nao: () => { }
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
      if (e.c_status_fornecedor === 'A') {
         imgStatus.setAttribute('src', '../../imgs/On.svg')
      } else {
         imgStatus.setAttribute('src', '../../imgs/Off.svg')
      }

      imgStatus.setAttribute('data-idfornecedor', e.n_fornecedor_fornecedor)
      imgStatus.setAttribute('class', 'icone_op')

      imgStatus.addEventListener('click', (evt) => {
         // console.log('entrou')
         const idfornecedor = evt.target.dataset.idfornecedor

         if (evt.target.getAttribute('src') === '../../imgs/On.svg') {
            const endpoint_mudarStatus = `${serv}/mudarStatusFornecedor/${idfornecedor}/I`
            // console.log(evt.target.getAttribute('src'))

            fetch(endpoint_mudarStatus)
               .then(res => {
                  console.log(res)
                  if (res.status === 200) {
                     evt.target.setAttribute('src', '../../imgs/Off.svg')
                     evt.target.parentNode.parentNode.childNodes[2].innerHTML = 'I'
                  }
               })
               .catch(err => console.log(err, 'A'))
         } else {
            const endpoint_mudarStatus = `${serv}/mudarStatusFornecedor/${idfornecedor}/A`

            fetch(endpoint_mudarStatus)
               .then(res => {
                  if (res.status === 200) {
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

         let endpoint = `${serv}/dadosforn/${id}`
         fetch(endpoint)
            .then(res => res.json())
            .then(res => {
               // console.log(res)
               btn_gravarPopUp.setAttribute('data-idfornecedor', id)
               f_nome.value = res[0].s_desc_fornecedor
               f_status.value = res[0].c_status_fornecedor
               img_foto.src = res[0].s_logo_fornecedor
               novoFornecedor.classList.remove('ocultarPopUp')

               if (res[0].s_logo_fornecedor || img_foto.src === 'null') {
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

   const addContForn = (id, nome) => {
      const divLinha = document.createElement('div')
      divLinha.setAttribute('class', 'linhaGrid novoContForn')

      const divC1 = document.createElement('div')
      divC1.setAttribute('class', 'colunaLinhaGrid c1_lcf')
      divC1.innerHTML = id
      divLinha.appendChild(divC1)

      const divC2 = document.createElement('div')
      divC2.setAttribute('class', 'colunaLinhaGrid c2_lcf')
      divC2.innerHTML = nome
      divLinha.appendChild(divC2)

      const divC3 = document.createElement('div')
      divC3.setAttribute('class', 'colunaLinhaGrid c3_lcf')
      divLinha.appendChild(divC3)

      const img_removerContForn = document.createElement('img')
      img_removerContForn.setAttribute('src', '../../imgs/Delete.svg')
      img_removerContForn.setAttribute('class', 'icone_op')

      img_removerContForn.addEventListener('click', (evt) => {
         evt.target.parentNode.parentNode.remove()
      })
      divC3.appendChild(img_removerContForn)

      const img_verFoneContForn = document.createElement('img')
      img_verFoneContForn.setAttribute('src', '../../imgs/Phone.svg')
      img_verFoneContForn.setAttribute('class', 'icone_op')

      img_verFoneContForn.addEventListener('click', (evt) => {
         // console.log(evt.target) // Retorna o elemento
         //console.log(evt.target.parentNode.parentNode.firstChild.innerHTML)

         const id = evt.target.parentNode.parentNode.firstChild.innerHTML

         const endpoint = `${serv}/retornaTelefone/${id}`
         fetch(endpoint)
            .then(res => res.json())
            .then(res => {
               // console.log(res)
               dadosGrid_telefonesContForn.innerHTML = ''

               let mzi = maiorZIndex() + 2
               telefonesContForn.setAttribute("style", `z-index: ${mzi}`)

               telefonesContForn.classList.remove('ocultarPopUp')

               res.forEach(e => {
                  // console.log(e.s_numero_telefone)

                  addTelefoneContForn(e.s_numero_telefone)
               })
            })
      })

      divC3.appendChild(img_verFoneContForn)

      dadosGrid_contatosFornAdd.appendChild(divLinha)
   }

   const criarLinhaContForn = (e) => {
      const divLinha = document.createElement('div')
      divLinha.setAttribute('class', 'linhaGrid')

      const divC1 = document.createElement('div')
      divC1.setAttribute('class', 'colunaLinhaGrid c1_lcf')
      divC1.innerHTML = e.n_pessoa_pessoa
      divLinha.appendChild(divC1)

      const divC2 = document.createElement('div')
      divC2.setAttribute('class', 'colunaLinhaGrid c2_lcf')
      divC2.innerHTML = e.s_nome_pessoa
      divLinha.appendChild(divC2)

      const divC3 = document.createElement('div')
      divC3.setAttribute('class', 'colunaLinhaGrid c3_lcf')
      divLinha.appendChild(divC3)

      const img_addContForn = document.createElement('img')
      img_addContForn.setAttribute('src', '../../imgs/addContForn.svg')
      img_addContForn.setAttribute('class', 'icone_op')

      img_addContForn.addEventListener('click', (evt) => {
         // console.log(evt.target) // Retorna o elemento
         //console.log(evt.target.parentNode.parentNode.firstChild.innerHTML)
         const linha = evt.target.parentNode.parentNode

         // console.log(linha.childNodes[0].innerHTML)
         const id = linha.childNodes[0].innerHTML
         const nome = linha.childNodes[1].innerHTML
         // console.log(linha)
         addContForn(id, nome)
      })

      divC3.appendChild(img_addContForn)

      const img_verFoneContForn = document.createElement('img')
      img_verFoneContForn.setAttribute('src', '../../imgs/Phone.svg')
      img_verFoneContForn.setAttribute('class', 'icone_op')

      img_verFoneContForn.addEventListener('click', (evt) => {
         // console.log(evt.target) // Retorna o elemento
         //console.log(evt.target.parentNode.parentNode.firstChild.innerHTML)

         const id = evt.target.parentNode.parentNode.firstChild.innerHTML

         const endpoint = `${serv}/retornaTelefone/${id}`
         fetch(endpoint)
            .then(res => res.json())
            .then(res => {
               // console.log(res)
               dadosGrid_telefonesContForn.innerHTML = ''

               let mzi = maiorZIndex() + 2
               telefonesContForn.setAttribute("style", `z-index: ${mzi}`)

               telefonesContForn.classList.remove('ocultarPopUp')

               res.forEach(e => {
                  // console.log(e.s_numero_telefone)

                  addTelefoneContForn(e.s_numero_telefone)
               })
            })
      })

      divC3.appendChild(img_verFoneContForn)

      dadosGrid_novosContatosForn.appendChild(divLinha)
   }

   const addTelefoneContForn = (telefone) => {
      const divLinha = document.createElement('div')
      divLinha.setAttribute('class', 'linhaGrid')

      const divC1 = document.createElement('div')
      divC1.setAttribute('class', 'colunaLinhaGrid c2_lcf')

      divC1.innerHTML = telefone

      divLinha.appendChild(divC1)

      dadosGrid_telefonesContForn.appendChild(divLinha)
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

   btn_fecharPopUpTelefonesContForn.addEventListener('click', (evt) => {
      telefonesContForn.classList.add('ocultarPopUp')
   })

   btn_fecharPopUp.addEventListener('click', (evt) => {
      novoFornecedor.classList.add('ocultarPopUp')
      pesquisa.classList.add('ocultarPopUp')
   })

   btn_gravarPopUp.addEventListener('click', (evt) => {
      const contat = [...document.querySelectorAll('.novoContForn')]

      let a_contat = []

      contat.forEach(t => {
         // console.log(t.firstChild.innerHTML)
         a_contat.push(t.firstChild.innerHTML)
      })

      const dados = {
         n_fornecedor_fornecedor: evt.target.dataset.idfornecedor,
         s_desc_fornecedor: f_nome.value,
         c_status_fornecedor: f_status.value,
         listaContatos: a_contat,
         s_logo_fornecedor: img_foto.getAttribute('src')
      }

      //console.log(dados)

      const cab = {
         method: 'POST',
         body: JSON.stringify(dados)
      }

      let endpoint = null

      if (modoJanela == 'n') {
         endpoint = `${serv}/novoforn`
      } else {
         endpoint = `${serv}/editarforn`
      }

      fetch(endpoint, cab)
         .then(res => {
            if (res.status === 200) {
               if (modoJanela == 'n') {
                  // alert('Novo Fornecedor gravado')
                  let config = {
                     titulo: 'Ok',
                     texto: 'Novo Fornecedor gravado',
                     cor: '#00F',
                     tipo: 'ok',
                     ok: () => { },
                     sim: () => { },
                     nao: () => { }
                  }

                  Cxmsg.mostrar(config)

                  f_nome.value = ''
                  f_status.value = ''
                  f_foto.value = ''
                  img_foto.setAttribute('src', '#')
               } else {
                  // alert('Fornecedor editado com sucesso')
                  let config = {
                     titulo: 'Ok',
                     texto: 'Fornecedor editado com sucesso',
                     cor: '#00F',
                     tipo: 'ok',
                     ok: () => { },
                     sim: () => { },
                     nao: () => { }
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
                  ok: () => { },
                  sim: () => { },
                  nao: () => { }
               }

               Cxmsg.mostrar(config)
            }
         })
         .finally(() => {
            img_foto.classList.add('esconderElemento')
            carregarTodosFornecedores()
         })

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

      if (obj) {
         reader.readAsDataURL(obj)
      }
   }

   f_foto.addEventListener('change', (evt) => {
      // console.log(evt.target)
      converter_imagem_b64(img_foto, evt.target.files[0])
   })

   btn_listarContatosForn.addEventListener('click', (evt) => {
      listaContatosForn.classList.remove('ocultarPopUp')
      // console.log(maiorZIndex() + 1)

      let mzi = maiorZIndex() + 1
      listaContatosForn.setAttribute("style", `z-index: ${mzi}`)

      dadosGrid_novosContatosForn.innerHTML = ''

      let endpoint = `${serv}/todasPessoasForn`
      fetch(endpoint)
         .then(res => res.json())
         .then(res => {
            console.log(res)

            res.forEach(e => {
               criarLinhaContForn(e)
            })
         })
         .catch(err => console.log(err))
   })

}
