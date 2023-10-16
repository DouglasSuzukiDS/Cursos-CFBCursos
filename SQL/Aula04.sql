DROP SCHEMA cfbcursos;

CREATE SCHEMA cfbcursos;

CREATE TABLE cliente(
   i_cliente_cliente INT PRIMARY KEY AUTO_INCREMENT,
   s_nome_cliente VARCHAR(50) NOT NULL,
   s_cpf_cliente VARCHAR(11) NOT NULL,
   d_nasc_cliente DATETIME
);

DROP TABLE clientes;

ALTER TABLE cliente MODIFY COLUMN s_nome_cliente VARCHAR(30) NOT NULL;

-- ALTER TABLE cliente ADD i_tipo_cliente INT NOT NULL DEFAULT 1;
ALTER TABLE cliente ADD i_tipo_cliente INT NOT NULL;

ALTER TABLE cliente DROP COLUMN i_tipo_cliente;

