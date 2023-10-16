-- MAX => Retorna o maior valor

INSERT INTO cliente VALUES (
   (SELECT max(c.i_cliente_cliente) + 1 as i_cliente_cliente FROM cliente c), -- Pega o ultimo 'id' + 1
   'Shanks', 00011122200, '1999-03-05', 1)

SELECT * FROM cliente;