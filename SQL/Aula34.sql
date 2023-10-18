-- Como usar o operador EXISTS - Curso de SQL - Aula 34

create table produtovenda(
   i_produtovenda_produtovenda INT NOT NULL AUTO_INCREMENT, 
   i_venda_venda INT NOT NULL, 
   s_dscproduto_produtovenda VARCHAR(50) NOT NULL, 
   f_precoun_produtovenda FLOAT NOT NULL, 
   i_qtde_produtovenda INT, 
   PRIMARY KEY (i_produtovenda_produtovenda), 
   FOREIGN KEY (i_venda_venda) REFERENCES venda (i_venda_venda)
);

SELECT * FROM produtovenda;

-- INSERTS
/*
   INSERT INTO produtovenda VALUES (1, 1, 'Mouse', 7.89, 1);

   INSERT INTO produtovenda VALUES (2, 1, 'Teclado', 15.20, 1);

   INSERT INTO produtovenda VALUES (3, 2, 'Mouse', 7.89, 2);

   INSERT INTO produtovenda VALUES (4, 2, 'Monitor', 299.80, 2);

   INSERT INTO produtovenda VALUES (5, 2, 'Microfone', 34.90, 2);

   INSERT INTO produtovenda VALUES (6, 3, 'Teclado', 15.20, 10);

   INSERT INTO produtovenda VALUES (7, 4, 'CPU', 569.78, 1);

   INSERT INTO produtovenda VALUES (8, 4, 'RAM', 325.00, 1);

   INSERT INTO produtovenda VALUES (9, 5, 'HD', 329.90, 2);

   INSERT INTO produtovenda VALUES (10, 6, 'Placa Vídeo', 899.49, 1);

   INSERT INTO produtovenda VALUES (11, 6, 'Placa Rede', 19.90, 1);

   INSERT INTO produtovenda VALUES (12, 6, 'Cx.Som', 29.90, 1);

   INSERT INTO produtovenda VALUES (13, 6, 'CPU', 325.00, 1);

   INSERT INTO produtovenda VALUES (14, 6, 'Mouse', 7.89, 1);

   INSERT INTO produtovenda VALUES (15, 7, 'Monitor', 299.80, 3);

   INSERT INTO produtovenda VALUES (16, 7, 'Mouse', 7.89, 2);

   INSERT INTO produtovenda VALUES (17, 8, 'HD', 249.90, 15);

   INSERT INTO produtovenda VALUES (18, 9, 'Placa Mãe', 900.00, 2);

   INSERT INTO produtovenda VALUES (19, 10, 'Cx.Som', 29.90, 2);

   INSERT INTO produtovenda VALUES (20, 10, 'Microfone', 34.90, 2);

   INSERT INTO produtovenda VALUES (21, 11, 'Teclado', 15.20, 5);

   INSERT INTO produtovenda VALUES (22, 11, 'CPU', 989.90, 2);

   INSERT INTO produtovenda VALUES (23, 11, 'RAM', 325.00, 2);

   INSERT INTO produtovenda VALUES (24, 12, 'HD', 249.90, 1);

   INSERT INTO produtovenda VALUES (25, 13, 'Placa Mãe', 149.90, 1);

   INSERT INTO produtovenda VALUES (26, 14, 'Impressora', 889.99, 3);

   INSERT INTO produtovenda VALUES (27, 14, 'Web Cam', 599.90, 3);

   INSERT INTO produtovenda VALUES (28, 15, 'Cabo Rede', 4.99, 1);

   INSERT INTO produtovenda VALUES (29, 16, 'Mouse', 7.89, 7);

   INSERT INTO produtovenda VALUES (30, 17, 'Teclado', 15.20, 8);

   INSERT INTO produtovenda VALUES (31, 18, 'RAM', 325.00, 2);

   INSERT INTO produtovenda VALUES (32, 19, 'HD', 249.90, 1);

   INSERT INTO produtovenda VALUES (33, 19, 'Microfone', 34.90, 1);

   INSERT INTO produtovenda VALUES (34, 20, 'Impressora', 499.90, 1);

   INSERT INTO produtovenda VALUES (35, 20, 'Web Cam', 329.90, 1);

   INSERT INTO cliente VALUES (14,'Crisberliston', '15935745698','2000-01-01', 1);

   INSERT INTO cliente VALUES (15, 'Malgamorson', '32165498700', '2001-01-01', 1);

   INSERT INTO cliente VALUES (16, 'Silmastilda', '12345678900', '2002-01-01',1);

   INSERT INTO cliente VALUES (17, 'Florasmirtes', '14785236911', '2003-01-01', 1);
*/

SELECT * FROM cliente;
SELECT * FROM venda WHERE i_cliente_cliente = 10;

SELECT * FROM cliente
WHERE EXISTS (SELECT * FROM venda WHERE i_cliente_cliente = 10);

SELECT * FROM cliente c
WHERE EXISTS (
   SELECT * FROM venda v WHERE 
      v.i_cliente_cliente = c.i_cliente_cliente);