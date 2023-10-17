-- SQL Insert / DML / Inserindo registro nas tabelas do banco de dados - Curso de SQL - Aula 08

/* Tabelas Aula 05 */
/* DML - INSERT */

INSERT INTO tipocliente VALUES (01, 'Pessoa Física');
INSERT INTO tipocliente VALUES (02, 'Pessoa Jurídica');
INSERT INTO tipocliente VALUES (03, 'Cliente Especial');

INSERT INTO cliente VALUES (01, 'Nick', '00000000000', '1990-12-12', 01);

-- DQT - SELECT
SELECT * FROM tipocliente;
SELECT * FROM cliente; 