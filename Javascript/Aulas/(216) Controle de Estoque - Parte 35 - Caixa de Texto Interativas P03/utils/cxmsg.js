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
      alert(config.texto)
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