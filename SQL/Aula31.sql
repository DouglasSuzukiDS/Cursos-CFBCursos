-- Tipos de JOIN do SQL - Curso de SQL - Aula 31
-- LEFT JOIN => Prioridade a Table Left
-- Right JOIN => Prioridade a Table Right
SELECT 
   c.i_cliente_cliente, c.s_nome_cliente 
FROM cliente c;

SELECT 
   c.i_cliente_cliente, c.s_nome_cliente 
FROM cliente c
INNER JOIN venda v ON
   c.i_cliente_cliente = v.i_cliente_cliente;

SELECT 
   c.i_cliente_cliente, c.s_nome_cliente, v.i_venda_venda 
FROM cliente c
LEFT JOIN venda v ON
   c.i_cliente_cliente = v.i_cliente_cliente;

SELECT 
   c.i_cliente_cliente, c.s_nome_cliente, v.i_venda_venda 
FROM cliente c
RIGHT JOIN venda v ON
   c.i_cliente_cliente = v.i_cliente_cliente;

