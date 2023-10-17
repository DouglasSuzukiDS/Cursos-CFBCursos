-- Como usar a Cláusula FROM - Curso de SQL - Aula 16

CREATE VIEW nomesCli as
SELECT i_cliente_cliente, s_nome_cliente FROM cliente;

SELECT * FROM (SELECT i_cliente_cliente, s_nome_cliente FROM cliente) c;

SELECT * FROM nomesCli;