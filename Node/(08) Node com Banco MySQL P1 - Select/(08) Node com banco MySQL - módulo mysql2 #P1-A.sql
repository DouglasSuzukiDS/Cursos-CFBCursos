CREATE TABLE cliente_node(
	ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    idade VARCHAR(45)
);

ALTER TABLE cliente_node change ID id INTEGER AUTO_INCREMENT ; /* Modica a column */

INSERT INTO cliente_node (nome,  idade) VALUES ( /* Insere os valores nos campos */
	'Kaido',  '65'
); 
select * from cliente_node;