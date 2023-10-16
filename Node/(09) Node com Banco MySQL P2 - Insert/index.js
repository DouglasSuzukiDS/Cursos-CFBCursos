(async () => {
   const db = require('./db')
   console.log('Inserir novo cliente')

   //await db.insereCliente({nome: 'BigMom', idade: '62'})

   const nom = 'Shanks'
   const ida = '38'
   await db.insereCliente({nome: nom, idade: ida})

   console.log('Obter todos os clientes')
   const clientes = await db.todosClientes()
   console.log(clientes)
})()