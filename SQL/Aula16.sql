CREATE VIEW nomesCli as
SELECT i_cliente_cliente, s_nome_cliente FROM cliente;

SELECT * FROM (SELECT i_cliente_cliente, s_nome_cliente FROM cliente) c;

SELECT * FROM nomesCli;