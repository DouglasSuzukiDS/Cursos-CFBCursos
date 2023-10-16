// (87) Como Navegar no Historico e Redirecionamento de Pagina
const url = document.getElementById('url')
const btn_url = document.getElementById('btn_url')

btn_url.addEventListener('click', (evt) => {
   // window.location='script.js' // Navega para o endereço
   //window.location='https://www.google.com.br'

   // window.location.replace('https://www.google.com.br') // Remove o link do historico (a página que contem o redirecionamento). Delete a URL corrente do historico

   // window.location.assign('https://www.google.com.br') // Não remove a página do historico de navegação. Não delete a URL corrente do historico

   // window.location.reload() // Regarrega a página

   // window.history.back() // Volta pra página anterior

   // window.history.forward() // Proxima página que está no historico 

   // window.history.go(1) // Navega para a pagina no historico conforme o numero informado 
   //console.log(window.history.length) // Tamanho do historico

   // console.log(url.value)
   window.location = url.value
})