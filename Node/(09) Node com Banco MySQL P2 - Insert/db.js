const conectar = async () => {
   if(global.conexao && global.conexao.state != 'disconnected')
      return global.conexao
   
   const mysql = require('mysql2/promise') 
   const con = mysql.createConnection("mysql://root:OnePiece@localhost:3306/cfbcursos")
      //Usuario:SenhaPorta/DB
   console.log('Conectou ao Banco')
   global.conexao = con
   return con
}

const todosClientes = async () => {
   const con = await conectar()
   const [linhas] = await con.query('select * from cliente_node')
   return await linhas
}

const insereCliente = async (cliente) => {
   const con = await conectar()
   const sql = 'INSERT INTO cliente_node (NOME, IDADE) VALUES (?, ?)'
   const valores = [cliente.nome, cliente.idade]
   await con.query(sql, valores)
}

module.exports = { todosClientes, insereCliente }