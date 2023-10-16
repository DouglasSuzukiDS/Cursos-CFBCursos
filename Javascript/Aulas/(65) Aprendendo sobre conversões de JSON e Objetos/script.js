// (65) Aprendendo sobre conversões de JSON e Objetos

const pessoa = {
   nome: 'Kaido',
   canal: 'CFB Cursos',
   curso: 'Javascript',
   aulas: {
      aula01: 'Introdução',
      aula02: 'Variáveis',
      aula03: 'Condicional',
   }
}

// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa.aulas.aula01)


const string_pessoa = '{"nome":"Kaido","canal":"CFB Cursos","curso":"Javascript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'

const s_json_pessoa = JSON.stringify(pessoa) // Converte o OBJ Literal para String JSON
const o_json_pessoa = JSON.parse(s_json_pessoa) // Converte String JSON para OBJ

console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)