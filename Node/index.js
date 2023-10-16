// (21) Juntando colecoes MongoDB com Node - P9
const mongodb = require('mongodb').MongoClient
const url = "mongodb+srv://Nick:123@cluster0.bpoaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
   // Obtido em 'connect' após criar o DB no site

mongodb.connect(url, (erro, banco) => {  
   if(erro) throw erro
   const dbo = banco.db("cfbcursos") // Se nao tem o banco ele cria
   const colecao1 = "cursos" 
   const colecao2 = "detalhesCursos"

   //const obj = {id: 00, curso:  "Curso de HTML", canal: "CFB Cursos"}
   /*let obj = [
      {idcurso: 01, curso: "Curso de C++", canal: "CFB Cursos"},
      {idcurso: 02, curso: "Curso de HTML", canal: "CFB Cursos"},
      {idcurso: 03, curso: "Curso de CSS", canal: "CFB Cursos"},
      {idcurso: 04, curso: "Curso de Javascript", canal: "CFB Cursos"},
      {idcurso: 05, curso: "Curso de PHP", canal: "CFB Cursos"},
      {idcurso: 06, curso: "Curso de Node", canal: "CFB Cursos"},
      {idcurso: 07, curso: "Curso de React", canal: "CFB Cursos"},
      {idcurso: 08, curso: "Curso de React-Native", canal: "CFB Cursos"},
      {idcurso: 09, curso: "Curso de Arduino", canal: "CFB Cursos"},
      {idcurso: 10, curso: "Curso de Photophop", canal: "CFB Cursos"},
      {idcurso: 11, curso: "Curso de AppInventor", canal: "CFB Cursos"},
      {idcurso: 12, curso: "Curso de Flash", canal: "CFB Cursos"},
      {idcurso: 13, curso: "Curso de Unity", canal: "CFB Cursos"},
      {idcurso: 14, curso: "Curso de C#", canal: "CFB Cursos"},
      {idcurso: 15, curso: "Curso de Java", canal: "CFB Cursos"},
      {idcurso: 16, curso: "Curso de QT Creator", canal: "CFB Cursos"},
      {idcurso: 17, curso: "Curso de SQL", canal: "CFB Cursos"},
      {idcurso: 18, curso: "Curso de Python", canal: "CFB Cursos"}
   ]

   dbo.collection(colecao).insertOne(obj, (erro, resultado) => {
      if(erro) throw erro
      console.log('1 novo curso inserido')
      //banco.close()
   })*/ // Se nao tem a coleção ele cria

   /*dbo.collection(colecao1).insertMany(obj, async (erro, resultado) => {
      if(erro) throw erro
      await console.log(resultado.insertedCount + ' novo(s) curso(s) inserido(s)')
      //banco.close()
   })

   obj = [
      {idcurso: 01, aulas: 192},
      {idcurso: 02, aulas: 264},
      {idcurso: 03, aulas: 77},
      {idcurso: 04, aulas: 122},
      {idcurso: 05, aulas: 50},
      {idcurso: 06, aulas: 21},
      {idcurso: 07, aulas: 45},
      {idcurso: 08, aulas: 46},
      {idcurso: 09, aulas: 75},
      {idcurso: 10, aulas: 30},
      {idcurso: 11, aulas: 48},
      {idcurso: 12, aulas: 60},
      {idcurso: 13, aulas: 44},
      {idcurso: 14, aulas: 132},
      {idcurso: 15, aulas: 51},
      {idcurso: 16, aulas: 89},
      {idcurso: 17, aulas: 42},
      {idcurso: 18, aulas: 86}
   ]

   dbo.collection(colecao2).insertMany(obj, async (erro, resultado) => {
      if(erro) throw erro
      await console.log(resultado.insertedCount + ' novo(s) curso(s) inserido(s)')
      //banco.close()
   })*/

   // Quando se coloca a chave vazia, significa que esta fazendo como um select * 
   //dbo.collection(colecao).findOne({}, (erro, resultado) => {
      
   // Caso passe algo para as {} do find, ele retorna apenas o elemento pesquisado
   // {projection: {TERMO:0}} // Não mostra a linha do registro
   /*dbo.collection(colecao).find({canal:'CFB Cursos'}, {projection:{_id:0}}).toArray(({}, (erro, resultado) => { // Assim retorna todos os registros
      if(erro) throw erro
      // console.log(resultado)
      console.log(resultado[0].curso) // resultado é um array
      banco.close()
   })) // Procura e retorno o primeiro registro */

   // const query = {id: 00, curso:  'Curso de Node'}
   //const query = {id: 00, curso:  /.t/} // Termine com T
   //const query = {id: 00, curso:  /C./} // Csomece com C
   /*const query = {} // Csomece com C
   dbo.collection(colecao).find(query, {projection:{_id:0}}).toArray(({}, (erro, resultado) => { 
      if(erro) throw erro
      console.log(resultado)
      banco.close()
   }))*/

   // ---------------------------
   // - Ordenação
   /*const ordenacao = {id: 00, curso:  -1} // 1 Crescente. -1 Decrescente
   dbo.collection(colecao).find(query).sort(ordenacao).toArray((erro, resultado) => { 
      if(erro) throw erro
      console.log(resultado)
      banco.close()
   })*/

   // ------------------------------
   // Deletar objeto da coleção
   /*let query = {id: 00, curso:  'Curso de HTML'} 
   dbo.collection(colecao).deleteOne(query, (erro, resultado) => { 
      if(erro) throw erro
      console.log('1 Curso Deletado')
   })*/

   /*let query = {curso:  /C./} 
   dbo.collection(colecao1).deleteMany(query, async(erro, resultado) => { 
      if(erro) throw erro
      await console.log(resultado.deletedCount + ' Curso(s) Deletado(s)')
   })*/

   /*query = {}
   dbo.collection(colecao).find(query, {projection:{_id:0}}).toArray((erro, resultado) => { 
      if(erro) throw erro
      console.log(resultado)
      banco.close()
   })*/

   // --------------------
   // Atualização de Objetos
   /*let query = {id: 00, curso:  'Curso de Javascript'} 
   let novoObj = {$set: {id: 00, curso:  'Curso de Javascript 2021'}}
   dbo.collection(colecao).updateOne(query, novoObj, (erro, resultado) => { 
      if(erro) throw erro
      console.log('1 Curso Atualizado')
   })

   dbo.collection(colecao).updateMany(query, novoObj, async (erro, resultado) => { 
      if(erro) throw erro
      await console.log(resultado.modifiedCount + ' Curso(s) Atualizado(s)')
   }) */

   /*query = {}
   dbo.collection(colecao1).find(query, {projection:{_id:0}}).toArray((erro, resultado) => { 
      if(erro) throw erro
      console.log(resultado)
      //banco.close()
   })

   dbo.collection(colecao2).find(query, {projection:{_id:0}}).toArray((erro, resultado) => { 
      if(erro) throw erro
      console.log(resultado)
      //banco.close()
   })*/


   let query = {}
   dbo.collection(colecao1).aggregate([
      {  $lookup: {
            from: 'detalhesCursos',
            localField: 'idcurso',
            foreignField: 'idcurso',
            as: 'Detalhes'
         }
      }
   ]).toArray((erro, resultado) => { 
      if(erro) throw erro
      console.log(JSON.stringify(resultado))
      banco.close()
   })

})

// É preciso criar um usuario para 'manipular' dados no DB pelo site
// É preciso inserir (aprovar) o IP para inserir os dados