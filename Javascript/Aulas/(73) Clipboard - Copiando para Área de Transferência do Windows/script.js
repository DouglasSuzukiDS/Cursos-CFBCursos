// (73) Clipboard - Copiando para Área de Transferência do Windows

const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const ton = document.querySelector('#ton')
const tlimpar = document.querySelector('#tlimpar')
const tigual = document.querySelector('#tigual')
const tcpy = document.querySelector('#tcpy')
const teste = document.querySelector('#teste')

let sinal = false
let decimal = false

// console.log(teclasNum)
//console.log(teclasOp)

teclasNum.forEach((el) => {
   el.addEventListener('click', (evt)=> {
      sinal = false

      if(evt.target.innerHTML == ',') {
         if(!decimal) {
            decimal = true

            if(display.innerHTML == '0') {
               display.innerHTML = '0,'
            } else {
               display.innerHTML += evt.target.innerHTML
            }
         } 
      } else {
         if(display.innerHTML == '0') {
            display.innerHTML = ''
         }

         display.innerHTML += evt.target.innerHTML
      }
   })
})

teclasOp.forEach((el) => {
   el.addEventListener('click', (evt)=> {
      if(!sinal) {
         sinal = true

         if(display.innerHTML == '0') {
            display.innerHTML = ''
         }

         if(evt.target.innerHTML == 'X') {
            display.innerHTML += '*'
         } else {
            display.innerHTML += evt.target.innerHTML
         }
      } 
   })
})

tlimpar.addEventListener('click', (evt) => {
   sinal = true
   decimal = false
   display.innerHTML = '0'
})

tigual.addEventListener('click', (evt) => {
   sinal = false
   decimal = false
   const res = eval(display.innerHTML) 
      // Eval() => Avalia a operação passada e se for por matematica, ele resolve
   display.innerHTML = res
})

tcpy.addEventListener('click', (evt) => {
   navigator.clipboard.writeText(display.innerHTML)
      // clipboard => Área de Transferência
         // writeText => Copiar para Área de Tranfereência
         // read => Ler da Área de Transferência 
   
   // teste.select() // Seleciona antes
   // teste.setSelectionRange(0, 999999) // Mobile
   // navigator.clipboard.writeText(teste.value)
})