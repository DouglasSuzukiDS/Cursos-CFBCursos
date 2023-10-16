DELETE from cliente WHERE i_cliente_cliente > 0;

INSERT into cliente SELECT * from cliente_aux;

INSERT INTO cliente_aux VALUES (02, 'James', '00000000002', '1990-12-12', 02);
INSERT INTO cliente_aux VALUES (03, 'Mike', '00000000003', '1990-12-12', 03);


DELETE from cliente WHERE i_cliente_cliente = 2;

SELECT * FROM cliente;

