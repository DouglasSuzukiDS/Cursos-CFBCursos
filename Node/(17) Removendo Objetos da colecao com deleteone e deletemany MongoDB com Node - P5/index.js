// (17) Removendo Objetos da colecao com deleteone e deletemany MongoDB com Node - P5
const mongodb = require('mongodb').MongoClient
const url = "mongodb+srv://Nick:123@cluster0.bpoaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
   // Obtido em 'connect' após criar o DB no site

mongodb.connect(url, (erro, banco) => {  
   if(erro) throw erro
   const dbo = banco.db("cfbcursos") // Se nao tem o banco ele cria

   const obj = {curso: "Curso de HTML", canal: "CFB Cursos"}

   const colecao = "cursos" 

   /*dbo.collection(colecao).insertOne(obj, (erro, resultado) => {
      if(erro) throw erro
      console.log('1 novo curso inserido')
      //banco.close()
   })*/ // Se nao tem a coleção ele cria

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

   // const query = {curso: 'Curso de Node'}
   //const query = {curso: /.t/} // Termine com T
   //const query = {curso: /C./} // Csomece com C
   /*const query = {} // Csomece com C
   dbo.collection(colecao).find(query, {projection:{_id:0}}).toArray(({}, (erro, resultado) => { 
      if(erro) throw erro
      console.log(resultado)
      banco.close()
   }))*/

   // ---------------------------
   // - Ordenação
   /*const ordenacao = {curso: -1} // 1 Crescente. -1 Decrescente
   dbo.collection(colecao).find(query).sort(ordenacao).toArray((erro, resultado) => { 
      if(erro) throw erro
      console.log(resultado)
      banco.close()
   })*/

   // ------------------------------
   // Deletar objeto da coleção
   /*let query = {curso: 'Curso de HTML'} 
   dbo.collection(colecao).deleteOne(query, (erro, resultado) => { 
      if(erro) throw erro
      console.log('1 Curso Deletado')
   })*/

   let query = {curso: /.t/} 
   dbo.collection(colecao).deleteMany(query, (erro, resultado) => { 
      if(erro) throw erro
      console.log('Cursos Deletados')
   })

   query = {}
   dbo.collection(colecao).find(query, {projection:{_id:0}}).toArray((erro, resultado) => { 
      if(erro) throw erro
      console.log(resultado)
      banco.close()
   })
})

// É preciso criar um usuario para 'manipular' dados no DB pelo site
// É preciso inserir (aprovar) o IP para inserir os dados