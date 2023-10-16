class Cxmsg {
   // static config = {
   //    titulo: '',
   //    texto: '',
   //    cor: '',
   //    ok: null,
   //    sim: null,
   //    nao: null
   // }
   static config = null 

   static mostrar = (config) => {
      this.config = config

      const cxmsg_fundo = document.createElement('div')
      cxmsg_fundo.setAttribute('class', 'cxmsg_fundo')
      cxmsg_fundo.setAttribute('id', 'cxmsg_fundo')

      const cxmsg = document.createElement('div')
      cxmsg.setAttribute('class', 'cxmsg')
      cxmsg_fundo.appendChild(cxmsg)

      const titulo_cxmsg = document.createElement('div')
      titulo_cxmsg.setAttribute('class', 'titulo_cxmsg')
      titulo_cxmsg.setAttribute('style', `background-color: ${config.cor} !important`)
      cxmsg.appendChild(titulo_cxmsg)

      const p_titulo = document.createElement('p')
      p_titulo.innerHTML = config.titulo
      titulo_cxmsg.appendChild(p_titulo)

      const img_btn_fechar = document.createElement('img')
      img_btn_fechar.setAttribute('id', 'btn_fechar_cxmsg')
      img_btn_fechar.setAttribute('class', 'btn_fechar_cxmsg')
      img_btn_fechar.setAttribute('src', '../../imgs/Close.svg')
      img_btn_fechar.addEventListener('click', (evt) => {
         this.fechar()
      })
      titulo_cxmsg.appendChild(img_btn_fechar)

      // Corpo
      const corpo_cxmsg = document.createElement('div')
      corpo_cxmsg.setAttribute('class', 'corpo_cxmsg')
      cxmsg.appendChild(corpo_cxmsg)

      const p_texto = document.createElement('p')
      p_texto.innerHTML = config.texto
      corpo_cxmsg.appendChild(p_texto)

      // Rodape
      const rodape_cxmsg = document.createElement('div')
      rodape_cxmsg.setAttribute('class', 'rodape_cxmsg')
      rodape_cxmsg.setAttribute('id', 'rodape_cxmsg')
      cxmsg.appendChild(rodape_cxmsg)

      // Botoes
      if(config.tipo === 'ok') {
         const btn_ok_cxmsg = document.createElement('button')
         btn_ok_cxmsg.setAttribute('class', 'btn_cxmsg')
         btn_ok_cxmsg.setAttribute('id', 'btn_ok_cxmsg')
         btn_ok_cxmsg.innerHTML = 'Ok'
         
         rodape_cxmsg.addEventListener('click', (evt) => {
            // if(config.ok) {
            //    config.ok()
            // }

            config.ok()

            this.fechar()
         })

         rodape_cxmsg.appendChild(btn_ok_cxmsg)
      } else if(config.tipo === 'sn') {
         const btn_sim_cxmsg = document.createElement('button')
         btn_sim_cxmsg.setAttribute('class', 'btn_cxmsg')
         btn_sim_cxmsg.setAttribute('id', 'btn_sim_cxmsg')
         btn_sim_cxmsg.innerHTML = 'Sim'

         btn_sim_cxmsg.addEventListener('click', (evt) => {
            // if(config.sim) {
            //    config.sim()
            // }
            config.sim()

            this.fechar()
         })

         rodape_cxmsg.appendChild(btn_sim_cxmsg)
   
         const btn_nao_cxmsg = document.createElement('button')
         btn_nao_cxmsg.setAttribute('class', 'btn_cxmsg')
         btn_nao_cxmsg.setAttribute('id', 'btn_nao_cxmsg')
         btn_nao_cxmsg.innerHTML = 'Nao'

         btn_nao_cxmsg.addEventListener('click', (evt) => {
            // if(config.nao) {
            //    config.nao()
            // }
            config.nao()

            this.fechar()
         })

         rodape_cxmsg.appendChild(btn_nao_cxmsg)
      }

      document.body.prepend(cxmsg_fundo)

      // alert(config.texto)
   }

   static fechar = () => {
      document.getElementById('cxmsg_fundo').remove()
   }
}

export { Cxmsg }

{/* <div id="cxmsg_fundo" class="cxmsg_fundo ocultarPopUp">
      <div id="cxmsg" class="cxmsg">
         <div id="titulo_cxmsg" class="titulo_cxmsg">
            <p>Título</p>

            <img src="../imgs/Close.svg" id="btn_fechar_cxmsg" class="btn_fechar_cxmsg" alt="Fechar" >
         </div>

         <div id="corpo_cxmsg" class="corpo_cxmsg">
            <p>Mensagem</p>
         </div>

         <div id="rodape_cxmsg" class="rodape_cxmsg">
            <button id='btn_ok_cxmsg' class='btn_cxmsg'>Ok</button>
            <button id='btn_sim_cxmsg' class='btn_cxmsg'>Sim</button>
            <button id='btn_nao_cxmsg' class='btn_cxmsg'>Não</button>
         </div>
      </div>
   </div> */}