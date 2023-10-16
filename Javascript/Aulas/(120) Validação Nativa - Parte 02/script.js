// (120) Validação Nativa - Parte 02

const f_nome = document.querySelector('#f_nome')
const f_nota = document.querySelector('#f_nota')
const f_msg = document.querySelector('#f_msg')

/*document.querySelector('#btn_validar').addEventListener('click', (evt) => {
   let estadoValidacao = f_nota.validity // Caso não tiver valor

   if(estadoValidacao.valueMissing) { 
      f_nota.setCustomValidity('Poxa, este campo é obrigatório')
   } else if(estadoValidacao.rangeOverflow) { 
      f_nota.setCustomValidity('Nossa, que nota alta que você informou')
   } else if(estadoValidacao.rangeUnderflow) { 
      f_nota.setCustomValidity('Credo, que nota baixa que você informou')
   }

   // f_nome.reporValidity() // Exibe a mensagem
   
   f_msg.innerHTML = f_nota.validationMessage
   evt.preventDefault()
})*/ 


document.querySelector('#btn_validar').addEventListener('click', (evt) => {
   let msg = null // Caso não tiver valor

   if(f_nota.validity.valueMissing) { 
      msg = 'Poxa, este campo é obrigatório'
   } else if(f_nota.validity.rangeOverflow) { 
      msg = 'Nossa, que nota alta que você informou'
   } else if(f_nota.validity.rangeUnderflow) { 
      msg = 'Credo, que nota baixa que você informou'
   }

   // f_nome.reporValidity() // Exibe a mensagem
   
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