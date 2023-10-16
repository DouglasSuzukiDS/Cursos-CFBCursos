/* CREATE TABLE tipocliente(
	i_tipocliente_tipocliente INT PRIMARY key AUTO_INCREMENT,
    s_dsctipocliente_tipocliente VARCHAR(100) NOT NULL
); */

/*
	ALTER TABLE <tabela_origem> ADD CONSTAINT <nome_resquicao> FOREIGN KEY (<campo_tabela_origem>) REFERENCES <tabela_destino> (<campo_tabela_destino>);
*/

ALTER TABLE cliente ADD CONSTRAINT fk_tipocliente FOREIGN KEY (i_tipo_cliente) REFERENCES tipocliente (i_tipocliente_tipocliente);