USE cfbcursos;

CREATE TABLE cliente(
   i_cliente_cliente INT PRIMARY KEY AUTO_INCREMENT,
   s_nome_cliente VARCHAR(50) NOT NULL,
   s_cpf_cliente VARCHAR(11) NOT NULL,
   d_nasc_cliente DATETIME
);
ALTER TABLE cliente ADD i_tipo_cliente INT NOT NULL;

CREATE TABLE tipocliente(
   i_tipocliente_tipocliente INT PRIMARY KEY AUTO_INCREMENT,
   s_dsctipocliente_tipocliente VARCHAR(100) NOT NULL
);

ALTER TABLE cliente ADD CONSTRAINT fk_tipocliente FOREIGN KEY (i_tipo_cliente) REFERENCES tipocliente (i_tipocliente_tipocliente);