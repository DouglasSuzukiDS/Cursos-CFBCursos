-- ALIAS, adicionando apelido às colunas - Curso de SQL - Aula 13

-- Alias => 'Apelido'
SELECT 
   i_cliente_cliente as idCliente,
   UPPER(s_nome_cliente) as nomeCliente, 
   i_tipo_cliente as tipoCliente,
   i_cliente_cliente * 2 as valorCliente
FROM cliente;

SELECT 
   tbc.i_cliente_cliente as idCliente,
   UPPER(tbc.s_nome_cliente) as nomeCliente, 
   tbc.i_tipo_cliente as tipoCliente,
   tbc.i_cliente_cliente * 2 as valorCliente
FROM cliente tbc;