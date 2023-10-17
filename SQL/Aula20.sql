-- Group By, agrupando colunas na consulta SQL - Curso de SQL - Aula 20

SELECT * FROM cliente GROUP BY i_tipo_cliente;

SELECT
   i_tipo_cliente, 
   COUNT(i_cliente_cliente) as qtde
FROM cliente GROUP BY i_tipo_cliente;

SELECT
   tc.s_dscTipoCliente_tipoCliente, 
   COUNT(c.i_cliente_cliente) as qtde
FROM 
   cliente c 
INNER JOIN
   tipoCliente tc ON tc.i_tipoCLiente_tipoCliente = c.i_tipo_cliente
GROUP BY 
   i_tipo_cliente;

SELECT
   tc.s_dscTipoCliente_tipoCliente, 
   COUNT(c.i_cliente_cliente) as qtde
FROM 
   tipoCliente tc
INNER JOIN
   cliente c ON tc.i_tipoCLiente_tipoCliente = c.i_tipo_cliente
GROUP BY 
   tc.i_tipoCLiente_tipoCliente;

SELECT * FROM venda GROUP BY d_data_venda;

SELECT 
   v.d_data_venda,
   COUNT(v.i_venda_venda) AS 'Qtde vendas do Dia'
FROM venda v 
GROUP BY d_data_venda;