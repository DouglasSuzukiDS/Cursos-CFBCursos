SELECT * FROM cliente;

/* CREATE TABLE `cliente_aux` (
  `i_cliente_cliente` int NOT NULL AUTO_INCREMENT,
  `s_nome_cliente` varchar(50) DEFAULT NULL,
  `s_cpf_cliente` varchar(11) DEFAULT NULL,
  `d_nasc_cliente` datetime DEFAULT NULL,
  `i_tipo_cliente` int NOT NULL,
  PRIMARY KEY (`i_cliente_cliente`),
  KEY `fk_tipocliente` (`i_tipo_cliente`),
  CONSTRAINT `fk_tipocliente_aux` FOREIGN KEY (`i_tipo_cliente`) REFERENCES `tipocliente` (`i_tipocliente_tipocliente`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci */

INSERT INTO cliente_aux /* Tabela que tera os valores inseridos de outra */
	(i_cliente_cliente, s_nome_cliente, s_cpf_cliente, d_nasc_cliente, i_tipo_cliente)
    SELECT  /* Pega o resultado desse Select e insere nessa tabela */
		i_cliente_cliente, s_nome_cliente, s_cpf_cliente, d_nasc_cliente, i_tipo_cliente
	FROM cliente;

SELECT * FROM cliente_aux;

