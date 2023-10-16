// (135) Criando Caixa de Mensagem Personalizada - Parte 01
const config = {
   titulo: 'Teste',
   texto: 'Curso de  Javascript',
   cor: '#48F'
}

const cxmsg = new Cxmsg(config)

const btn_mostrarcxmsg = document.querySelector('#btn_mostrarcxmsg')

btn_mostrarcxmsg.addEventListener('click', () => {
   cxmsg.mostrar()
})