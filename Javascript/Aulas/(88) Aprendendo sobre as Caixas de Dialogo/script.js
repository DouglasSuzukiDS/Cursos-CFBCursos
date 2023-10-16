// (88) Aprendendo sobre as Caixas de Dialogo
const btn_alert = document.getElementById('btn_alert')
const btn_confirm = document.getElementById('btn_confirm')
const btn_prompt = document.getElementById('btn_prompt')

btn_alert.addEventListener('click', (evt) => {
   alert('Mensagem no Alert')
})

btn_confirm.addEventListener('click', (evt) => {
   const ret = confirm('Mensagem no Confirm')
   // console.log(ret)

   if(ret) {
      console.log('Botão OK pressionado')
   } else {
      console.log('Botão Cancelar pressionado')
   }
})

btn_prompt.addEventListener('click', (evt) => {
   const nome = prompt('Digite um nome', 'Digite um nome aqui') // Segundo paremetro é como se fosse o placeholder do input

   // console.log(nome)

   if(nome == null) {
      console.log('Botão CANCELAR pressionado')
   } else {
      console.log(nome)
   }
})