/* DML - Insert */

/* INSERT INTO <TABLE> (colunas) VALUES (valores) */

/* INSERT INTO tipocliente VALUES (01, 'Pessoa Física');
INSERT INTO tipocliente VALUES (02, 'Pessoa Jurídica');
INSERT INTO tipocliente VALUES (03, 'Cliente Especial');

INSERT INTO cliente VALUES (01, 'Kaido', '00000000000', '1963-05-01', 03);
INSERT INTO cliente VALUES (02, 'Shanks', '11111111111', '1968-03-09', 03);
INSERT INTO cliente VALUES (03, 'BigMom', '22222222222', '1964-02-15', 01);
INSERT INTO cliente VALUES (04, 'Shirohige', '33333333333', '1950-04-06', 02);
INSERT INTO cliente VALUES (05, 'Kurohige', '44444444444', '1982-08-03', 01);

select * from cliente; */
/* delete  from cliente where i_cliente_cliente = 01; // Para remover */

/* Quando quer inserir em TODAS AS COLUNAS, não se precisa expecificar as colunas */
INSERT INTO 
	cliente (i_cliente_cliente, s_nome_cliente, s_cpf_cliente, d_nasc_cliente, i_tipo_cliente) 
	VALUES (06, 'Shiki', '66666666666', '1962-03-20', 01);

/* DQL - SELECT */
SELECT * FROM  tipocliente;
SELECT * FROM  cliente;