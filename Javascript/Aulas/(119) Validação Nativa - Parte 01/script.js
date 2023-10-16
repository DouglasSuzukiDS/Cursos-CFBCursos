// (119) Validação Nativa - Parte 01

const f_nome = document.querySelector('#f_nome')
const f_nota = document.querySelector('#f_nota')
const f_msg = document.querySelector('#f_msg')

document.querySelector('#btn_validar').addEventListener('click', (evt) => {
   let msg = null

   if(!f_nota.checkValidity()) { // Caso a validação não for satisfeita
      msg = f_nome.validationMessage
   }

   f_msg.innerHTML = msg
   evt.preventDefault()
})

// Métodos de validação do DOM
   // checkValidity() // Caso a validação não for satisfeita
   // setCustomValidity()

// Propriedade de validação do DOM
   // validity
   // validationMessage

// Propriedades de Validação
/*
   - customError: true, se uma mensagem de validação personalizada for definida.

   - patternMusmatch: tue, se o valor de um elemento não corresponder ao seu atributo.

   - rangeOverFlow: true, se o valor de uma elemento for maior que seu atributo max.

   - rangeUnderFlow: true, se o valor de um elemento for menos que seu atributo min.

   - stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.

   - tooLong: true, se o valor de um elemento exceder seu atributo maxLength.

   - typeMismatch: true, se o valor de um elemento for inválido por seu atributo type.

   - valueMissing: true, se um elemento (com um atrivuto obrigatório) não tiver válido.

   - valid: truem se o valor de um elemento for válido.
*/