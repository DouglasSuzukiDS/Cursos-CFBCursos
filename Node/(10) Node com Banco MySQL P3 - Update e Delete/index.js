(async () => {
   const db = require('./db')

   /* console.log('Inserir novo cliente')

   //await db.insereCliente({nome: 'BigMom', idade: '62'})

   const nom = 'Shanks'
   const ida = '38'
   await db.insereCliente({nome: nom, idade: ida}) */

   
   /*const id = 3
   const nom = 'Shanks'
   const ida = 35
   await db.atualizaCliente(id, {nome: nom, idade: ida})
   console.log('Cliente ' + id + ' atulizado')*/

   const id = 3
   await db.deletarCliente(id)
   console.log('Cliente ' + id + ' deletado')

   console.log('Obter todos os clientes')
   const clientes = await db.todosClientes()
   console.log(clientes)
})()