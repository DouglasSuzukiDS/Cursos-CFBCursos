SELECT * FROM cliente;

CREATE TABLE cliente_aux(
   i_cliente_cliente INT PRIMARY KEY AUTO_INCREMENT,
   s_nome_cliente VARCHAR(50) NOT NULL,
   s_cpf_cliente VARCHAR(11) NOT NULL,
   d_nasc_cliente DATETIME
);

ALTER TABLE cliente_aux ADD i_tipo_cliente INT NOT NULL;

ALTER TABLE cliente ADD CONSTRAINT fk_tipocliente_aux FOREIGN KEY (i_tipo_cliente) REFERENCES tipocliente (i_tipocliente_tipocliente);

SELECT * FROM cliente_aux;

INSERT INTO cliente_aux 
   (i_cliente_cliente, s_nome_cliente, s_cpf_cliente, d_nasc_cliente, i_tipo_cliente)
   SELECT 
      i_cliente_cliente, 
      s_nome_cliente, 
      s_cpf_cliente, 
      d_nasc_cliente, 
      i_tipo_cliente 
   FROM cliente;