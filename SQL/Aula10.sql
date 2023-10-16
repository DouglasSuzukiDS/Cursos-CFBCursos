UPDATE cliente SET s_nome_cliente = 'Nick Matsubara', s_cpf_cliente = '00000000001' WHERE i_cliente_cliente = 1;

INSERT into cliente SELECT * from cliente_aux;

SELECT * FROM cliente;