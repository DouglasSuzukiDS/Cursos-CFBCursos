// Via JS
let btn_somarjs = document.getElementById('btn_somarjs').addEventListener('click', () => {
   let v1 = parseInt(document.getElementById('v1').value)
   let v2 = parseInt(document.getElementById('v2').value)
   let soma = v1 + v2
   let res = document.getElementById('res').value = soma
})

// Via JQ
$('#btn_somarjq').click(() => {  // Aponta para o elemento
   let v1 = parseInt($('#v1').val())
   let v2 = parseInt($('#v2').val())
   let soma = v1 + v2
   $('#res').val(soma)
})