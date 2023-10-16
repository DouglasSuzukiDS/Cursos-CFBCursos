// (29) Operador This
function aluno(nome, nota) { // This faz referencia ao proprio elemento
   this.nome = nome
   this.nota = nota

   // console.log(nome)
   // console.log(nota)

   this.dados_anonimo = function () {  // Vai retorna undefined
      setTimeout(function() {
         console.log(this.nome)
         console.log(this.nota)
      }, 2000);
   }

   this.dados_arrow = function() { // Usa o contexto do root/pai
      setTimeout(() => {
         console.log(this.nome)
         console.log(this.nota)
      }, 2000);
   }
}


//aluno('Kaido', 10)
const al1 = new aluno('Kaido', 100)
al1.dados_anonimo()
al1.dados_arrow()