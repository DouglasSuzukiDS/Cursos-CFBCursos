-- Funções MAX e MIN - Curso de SQL - Aula 26
SELECT MAX(f_valor_venda) FROM venda;
SELECT MIN(f_valor_venda) FROM venda;

-- Seleciona todas as coluna da maior venda
SELECT *, MAX(f_valor_venda) FROM venda;

SELECT * FROM venda
WHERE f_valor_venda = (SELECT MAX(f_valor_venda) FROM venda);

SELECT 
   c.s_nome_cliente, 
   v.i_venda_venda,
   v.d_data_venda,
   v.f_valor_venda
FROM venda v
INNER JOIN cliente c ON c.i_cliente_cliente = v.i_cliente_cliente
WHERE v.f_valor_venda = (SELECT MAX(f_valor_venda) FROM venda);