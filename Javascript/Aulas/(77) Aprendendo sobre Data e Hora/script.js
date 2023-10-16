// (78) Criando um Relógio em JS - Data e Hora - Parte 02
const data = new Date()
//console.log(data)
   /*
      getDate() = Dia do Mês
      getDay() = Dia da Semana (número)
      getMonth() = Mês
      getFullYear() = Ano com 4 dígitos
      getHours() = Horas
      getMilliseconds() = Milisegundos
      getMinutes() = Minutos
      getSeconds() = Segundos
      getTime() = Timestamp (Milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
      Date.now() = Timestamp (Milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
      getTimezoneOffset() = Timezone da Localidade
      setDate() = Define um dia do mês para a data
      setMonth() = Define um mês para a dara
      setFullYear() = Define um ano para a data
      setHours() = Define horas
      setMinutes() = Define minutos
      setSeconds() = Define segundos
      setMilliseconds() = Define milisegundos
      toDateString = Retorna somente a data
   */

//console.log(Date.now()) // Timestamp

// console.log(data)
// console.log(data.toDateString())
// console.log(`Dia: ${data.getDate()}`)

const div_data = document.getElementById('div_data')

let dia = data.getDate() 
dia = dia < 10 ? '0' + dia : dia

let mes = data.getMonth() 
mes = mes < 10 ? '0' + mes : mes

//const data_r = data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear()
//const data_r = dia_m + '/' + data.getMonth() + '/' + data.getFullYear()

const data_r = dia + '/' + mes + '/' + data.getFullYear()

div_data.innerHTML = data_r


