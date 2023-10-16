// (14) Usando MongoDB com Node - P2 - Procurando dados no DB
const mongodb = require('mongodb').MongoClient
const url = "mongodb+srv://Nick:123@cluster0.bpoaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
   // Obtido em 'connect' após criar o DB no site

mongodb.connect(url, (erro, banco) => {  
   if(erro) throw erro
   const dbo = banco.db("cfbcursos") // Se nao tem o banco ele cria

   const obj = {curso: "Curso de Javascript", canal: "CFB Cursos"}

   const colecao = "cursos" 

   /*dbo.collection(colecao).insertOne(obj, (erro, resultado) => {
      if(erro) throw erro
      console.log('1 novo curso inserido')
      banco.close()
   })*/ // Se nao tem a coleção ele cria

   // Quando se coloca a chave vazia, significa que esta fazendo como um select * 
   //dbo.collection(colecao).findOne({}, (erro, resultado) => {
      
   // Caso passe algo para as {} do find, ele retorna apenas o elemento pesquisado
   // {projection: {TERMO:0}} // Não mostra a linha do registro
   dbo.collection(colecao).find({canal:'CFB Cursos'}, {projection:{_id:0}}).toArray(({}, (erro, resultado) => { // Assim retorna todos os registros
      if(erro) throw erro
      // console.log(resultado)
      console.log(resultado[0].curso) // resultado é um array
      banco.close()
   })) // Procura e retorno o primeiro registro
})

// É preciso criar um usuario para 'manipular' dados no DB pelo site
// É preciso inserir (aprovar) o IP para inserir os dados