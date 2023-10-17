-- DISTINCT - Curso de SQL - Aula 14

SELECT 
   tbc.i_cliente_cliente as idCliente,
   UPPER(tbc.s_nome_cliente) as nomeCliente, 
   tbc.i_tipo_cliente as tipoCliente,
   tbc.i_cliente_cliente * 2 as valorCliente
FROM cliente tbc;

CREATE TABLE venda(
   i_venda_venda INT PRIMARY KEY AUTO_INCREMENT,
   i_cliente_cliente INT NOT NULL,
   d_data_venda DATE,
   f_valor_venda FLOAT,
   FOREIGN KEY (i_cliente_cliente) REFERENCES cliente (i_cliente_cliente)
);

/*INSERT INTO venda VALUES (1, 1, '2023-10-11', 123.5);
insert into venda values(2,2,'2020-12-01',535.2);
insert into venda values(3,3,'2020-11-10',50.49);
insert into venda values(4,2,'2020-10-15',1584.25);
insert into venda values(5,1,'2020-11-20',327.80);
insert into venda values(6,3,'2020-09-08',15);
insert into venda values(7,3,'2020-09-07',12.99);
insert into venda values(8,3,'2020-11-22',59.90);
insert into venda values(9,1,'2020-10-10',235.50);
insert into venda values(10,2,'2020-01-23',7.99);
insert into venda values(12,5,'2020-03-07',535.2);
insert into venda values(13,6,'2020-04-01',50.49);
insert into venda values(14,5,'2020-04-01',1584.25);
insert into venda values(15,5,'2020-05-20',327.80);
insert into venda values(16,7,'2020-03-18',15);
insert into venda values(17,4,'2020-09-07',12.99);
insert into venda values(18,3,'2020-12-24',59.90);
insert into venda values(19,8,'2020-06-25',235.50);
insert into venda values(20,2,'2020-06-26',7.99);*/
SELECT * FROM venda;
SELECT * FROM cliente;

-- DISTINCT => Remove as duplicidadess
SELECT DISTINCT i_cliente_cliente FROM venda;