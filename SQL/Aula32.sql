-- Ligando uma tabela a ela mesma (Self Join) - Curso de SQL - Aula 32
SELECT * FROM 
   cliente c1, cliente c2
WHERE c1.i_tipo_cliente = c2.i_tipo_cliente
ORDER BY c1.i_tipo_cliente;

SELECT * FROM 
   cliente c1, cliente c2
WHERE 
   c1.i_tipo_cliente = c2.i_tipo_cliente AND
   c1.s_nome_cliente = 'Shanks'
ORDER BY c1.i_tipo_cliente;