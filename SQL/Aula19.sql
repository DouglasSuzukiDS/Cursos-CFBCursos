SELECT * FROM cliente;
SELECT * FROM tipoCliente;

SELECT
   c.i_cliente_cliente,
   c.s_nome_cliente,
   c.s_cpf_cliente,
   c.d_nasc_cliente,
   tc.s_dscTipoCliente_tipoCliente
FROM cliente c
   INNER JOIN tipoCliente tc ON c.i_tipo_cliente = tc.i_tipoCliente_tipoCliente;

SELECT 
   v.i_venda_venda,
   c.s_nome_cliente,
   c.s_cpf_cliente,
   v.d_data_venda,
   v.f_valor_venda,
   tc.s_dscTipoCliente_tipoCliente
FROM venda v
   INNER JOIN cliente c ON v.i_cliente_cliente = c.i_cliente_cliente
   INNER JOIN tipoCliente tc ON c.i_tipo_cliente = tc.i_tipoCliente_tipoCliente;
