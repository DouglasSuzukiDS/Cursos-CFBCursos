/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
DROP TABLE IF EXISTS cliente;
CREATE TABLE `cliente` (
  `i_cliente_cliente` int NOT NULL AUTO_INCREMENT,
  `s_nome_cliente` varchar(50) NOT NULL,
  `s_cpf_cliente` varchar(11) NOT NULL,
  `d_nasc_cliente` datetime DEFAULT NULL,
  `i_tipo_cliente` int NOT NULL,
  `s_senha_cliente` varchar(20) DEFAULT NULL,
  `s_usr_cliente` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`i_cliente_cliente`),
  KEY `fk_tipocliente_aux` (`i_tipo_cliente`),
  CONSTRAINT `fk_tipocliente` FOREIGN KEY (`i_tipo_cliente`) REFERENCES `tipocliente` (`i_tipocliente_tipocliente`),
  CONSTRAINT `fk_tipocliente_aux` FOREIGN KEY (`i_tipo_cliente`) REFERENCES `tipocliente` (`i_tipocliente_tipocliente`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS cliente_aux;
CREATE TABLE `cliente_aux` (
  `i_cliente_cliente` int NOT NULL AUTO_INCREMENT,
  `s_nome_cliente` varchar(50) NOT NULL,
  `s_cpf_cliente` varchar(11) NOT NULL,
  `d_nasc_cliente` datetime DEFAULT NULL,
  `i_tipo_cliente` int NOT NULL,
  PRIMARY KEY (`i_cliente_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS produtovenda;
CREATE TABLE `produtovenda` (
  `i_produtovenda_produtovenda` int NOT NULL AUTO_INCREMENT,
  `i_venda_venda` int NOT NULL,
  `s_dscproduto_produtovenda` varchar(50) NOT NULL,
  `f_precoun_produtovenda` float NOT NULL,
  `i_qtde_produtovenda` int DEFAULT NULL,
  PRIMARY KEY (`i_produtovenda_produtovenda`),
  KEY `i_venda_venda` (`i_venda_venda`),
  CONSTRAINT `produtovenda_ibfk_1` FOREIGN KEY (`i_venda_venda`) REFERENCES `venda` (`i_venda_venda`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS tipocliente;
CREATE TABLE `tipocliente` (
  `i_tipocliente_tipocliente` int NOT NULL AUTO_INCREMENT,
  `s_dsctipocliente_tipocliente` varchar(100) NOT NULL,
  PRIMARY KEY (`i_tipocliente_tipocliente`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS venda;
CREATE TABLE `venda` (
  `i_venda_venda` int NOT NULL AUTO_INCREMENT,
  `i_cliente_cliente` int NOT NULL,
  `d_data_venda` date DEFAULT NULL,
  `f_valor_venda` float DEFAULT NULL,
  PRIMARY KEY (`i_venda_venda`),
  KEY `i_cliente_cliente` (`i_cliente_cliente`),
  CONSTRAINT `venda_ibfk_1` FOREIGN KEY (`i_cliente_cliente`) REFERENCES `cliente` (`i_cliente_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;

CREATE OR REPLACE VIEW `cpfcliente` AS select `cliente`.`i_cliente_cliente` AS `i_cliente_cliente`,`cliente`.`s_cpf_cliente` AS `s_cpf_cliente` from `cliente`;

CREATE OR REPLACE VIEW `nivermesatual` AS select `cliente`.`i_cliente_cliente` AS `i_cliente_cliente`,`cliente`.`s_nome_cliente` AS `s_nome_cliente`,dayofmonth(`cliente`.`d_nasc_cliente`) AS `Dia Aniversario` from `cliente` where (month(`cliente`.`d_nasc_cliente`) = month(curdate()));

INSERT INTO cliente(i_cliente_cliente,s_nome_cliente,s_cpf_cliente,d_nasc_cliente,i_tipo_cliente,s_senha_cliente,s_usr_cliente) VALUES('1','\'Nick\'','\'00000000000\'','\'1990-12-12 00:00:00\'','1','\'123\'','\'brn\''),('2','\'James\'','\'00000000002\'','\'1990-12-12 00:00:00\'','2','\'123\'','\'astro\''),('3','\'Mike\'','\'00000000003\'','\'1990-12-12 00:00:00\'','3','\'123\'','\'bene\''),('4','\'Shanks\'','\'11122200\'','\'1999-03-05 00:00:00\'','1','\'123\'','\'clov\''),('5','\'Valkisneide\'','\'11223344556\'','NULL','1','\'123\'','\'maris\''),('6','\'Alcinclésio\'','\'65544332211\'','NULL','2','\'123\'','\'xing\''),('7','\'Nestisgerson\'','\'74125896300\'','NULL','3','\'123\'','\'tra\''),('8','\'Mordonório\'','\'36925814799\'','NULL','1','\'123\'','\'arqui\''),('9','\'Mordonório\'','\'36925814799\'','NULL','2','\'123\'','\'clare\''),('10','\'Salomildo\'','\'98765432147\'','NULL','3','\'123\'','\'nel\''),('11','\'Tonhao\'','\'00000000171\'','\'2000-01-01 00:00:00\'','1','\'123\'','\'bartol\''),('12','\'Tonhaozin\'','\'00000000172\'','\'2009-01-01 00:00:00\'','1','\'123\'','\'blest\''),('13','\'Tonho\'','\'00000000173\'','\'2010-05-05 00:00:00\'','1','\'123\'','\'ves\''),('14','\'Crisberliston\'','\'15935745698\'','\'2000-01-01 00:00:00\'','1','\'123\'','\'prast\''),('15','\'Malgamorson\'','\'32165498700\'','\'2001-01-01 00:00:00\'','1','\'123\'','\'valk\''),('16','\'Silmastilda\'','\'12345678900\'','\'2002-01-01 00:00:00\'','1','\'123\'','\'alci\''),('17','\'Florasmirtes\'','\'14785236911\'','\'2003-01-01 00:00:00\'','1','\'123\'','\'nest\'');

INSERT INTO cliente_aux(i_cliente_cliente,s_nome_cliente,s_cpf_cliente,d_nasc_cliente,i_tipo_cliente) VALUES('1','\'Nick\'','\'00000000000\'','\'1990-12-12 00:00:00\'','1'),('2','\'James\'','\'00000000002\'','\'1990-12-12 00:00:00\'','2'),('3','\'Mike\'','\'00000000003\'','\'1990-12-12 00:00:00\'','3');

INSERT INTO produtovenda(i_produtovenda_produtovenda,i_venda_venda,s_dscproduto_produtovenda,f_precoun_produtovenda,i_qtde_produtovenda) VALUES('1','1','\'Mouse\'','7.89','NULL'),('2','1','\'Teclado\'','15.2','1'),('3','2','\'Mouse\'','7.89','2'),('4','2','\'Monitor\'','299.8','2'),('5','2','\'Microfone\'','34.9','2'),('6','3','\'Teclado\'','15.2','10'),('7','4','\'CPU\'','569.78','1'),('8','4','\'RAM\'','325','1'),('9','5','\'HD\'','329.9','2'),('10','6','\'Placa Vídeo\'','899.49','1'),('11','6','\'Placa Rede\'','19.9','1'),('12','6','\'Cx.Som\'','29.9','1'),('13','6','\'CPU\'','325','1'),('14','6','\'Mouse\'','7.89','1'),('15','7','\'Monitor\'','299.8','3'),('16','7','\'Mouse\'','7.89','2'),('17','8','\'HD\'','249.9','15'),('18','9','\'Placa Mãe\'','900','2'),('19','10','\'Cx.Som\'','29.9','2'),('20','10','\'Microfone\'','34.9','2');

INSERT INTO tipocliente(i_tipocliente_tipocliente,s_dsctipocliente_tipocliente) VALUES('1','\'Pessoa Física\''),('2','\'Pessoa Jurídica\''),('3','\'Cliente Especial\'');
INSERT INTO venda(i_venda_venda,i_cliente_cliente,d_data_venda,f_valor_venda) VALUES('1','1','\'2023-10-11\'','123.5'),('2','2','\'2020-12-01\'','535.2'),('3','3','\'2020-11-10\'','50.49'),('4','2','\'2020-10-15\'','1584.25'),('5','1','\'2020-11-20\'','327.8'),('6','3','\'2020-09-08\'','15'),('7','3','\'2020-09-07\'','12.99'),('8','3','\'2020-11-22\'','59.9'),('9','1','\'2020-10-10\'','235.5'),('10','2','\'2020-01-23\'','7.99'),('12','5','\'2020-03-07\'','535.2'),('13','6','\'2020-04-01\'','50.49'),('14','5','\'2020-04-01\'','1584.25'),('15','5','\'2020-05-20\'','327.8'),('16','7','\'2020-03-18\'','15'),('17','4','\'2020-09-07\'','12.99'),('18','3','\'2020-12-24\'','59.9'),('19','8','\'2020-06-25\'','235.5'),('20','2','\'2020-06-26\'','7.99');DROP PROCEDURE IF EXISTS canal;
CREATE PROCEDURE `canal`(IN curso VARCHAR(50))
BEGIN
      DECLARE x VARCHAR(50);
      SET x = 'youtube.com/cfbcursos';
      SELECT x, curso;
   END;

DROP PROCEDURE IF EXISTS idade;
CREATE PROCEDURE `idade`(IN idCliente INT, OUT idade INT, OUT res VARCHAR(20))
BEGIN
      DECLARE dt DATETIME;
      SET dt = (SELECT d_nasc_cliente FROM cliente WHERE i_cliente_cliente = idCliente);
      SET idade = YEAR(now()) - YEAR(dt);
      IF(idade >= 18) THEN
         SET res = 'Maior';
      ELSE 
         SET res = 'Menor';
      END IF;
   END;