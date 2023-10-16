/*UPDATE cliente SET 
	s_nome_cliente = 'SenGoku' ,
    s_cpf_cliente = '11111111111'
WHERE i_cliente_cliente='1';*/

/* Muda os campos selecionados de uma vez */
/* UPDATE cliente SET i_tipo_cliente = 1 WHERE i_cliente_cliente > 0; */

DELETE  FROM cliente WHERE i_cliente_cliente > 0;
/* Aqui faz a inserção dos dados pelo conteudo da outra tabela */
INSERT INTO cliente SELECT * FROM cliente_aux;

SELECT * FROM cliente;