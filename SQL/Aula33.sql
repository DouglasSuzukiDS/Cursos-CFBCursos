-- Como usar o operador UNION - Curso de SQL - Aula 33
SELECT * FROM cliente;
SELECT * FROM cliente_aux;

SELECT 'Cliente' AS Tabela, i_cliente_cliente, s_nome_cliente FROM cliente
UNION
SELECT 'Cliente Aux', i_cliente_cliente, s_nome_cliente FROM cliente_aux
UNION
SELECT 'Venda', i_cliente_cliente, i_venda_venda FROM venda;

SELECT 'Cliente' AS Tabela, i_cliente_cliente, s_nome_cliente FROM cliente
UNION
SELECT 'Cliente Aux', i_cliente_cliente, s_nome_cliente FROM cliente_aux
UNION
SELECT 'Venda', v.i_cliente_cliente, c.s_nome_cliente FROM venda v
   INNER JOIN cliente c ON 
   v.i_cliente_cliente = c.i_cliente_cliente;
