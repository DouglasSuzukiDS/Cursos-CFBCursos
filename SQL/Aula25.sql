-- TOP vs LIMIT - Curso de SQL - Aula 25

-- Somente no SQL Server
-- SELECT TOP 5 * FROM cliente;

-- Somente no ORACLE
-- SELECT * FROM cliente WHERE ROWNUM < 5;

SELECT * FROM cliente LIMIT 5;

SELECT * FROM venda ORDER BY f_valor_venda DESC LIMIT 3;

SELECT 
   c.s_nome_cliente, 
   v.i_venda_venda,
   v.d_data_venda,
   v.f_valor_venda 
FROM venda  v
INNER JOIN cliente c ON c.i_cliente_cliente = v.i_cliente_cliente
ORDER BY f_valor_venda DESC LIMIT 3;
