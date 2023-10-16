-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: estoque
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pessoa`
--

DROP TABLE IF EXISTS `pessoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pessoa` (
  `n_pessoa_pessoa` int NOT NULL AUTO_INCREMENT,
  `n_fornecedor_fornecedor` int DEFAULT NULL,
  `n_tipopessoa_tipopessoa` int DEFAULT NULL,
  `s_nome_pessoa` varchar(255) DEFAULT NULL,
  `s_email_pessoa` varchar(50) DEFAULT NULL,
  `s_senha_pessoa` varchar(255) DEFAULT NULL,
  `n_priacess_pessoa` int DEFAULT NULL,
  `s_foto_pessoa` mediumtext,
  `c_status_pessoa` char(1) DEFAULT NULL,
  PRIMARY KEY (`n_pessoa_pessoa`),
  KEY `n_fornecedor_fornecedor` (`n_fornecedor_fornecedor`),
  KEY `n_tipoPessoa` (`n_tipopessoa_tipopessoa`),
  CONSTRAINT `pessoa_ibfk_1` FOREIGN KEY (`n_fornecedor_fornecedor`) REFERENCES `fornecedor` (`n_fornecedor_fornecedor`),
  CONSTRAINT `pessoa_ibfk_2` FOREIGN KEY (`n_tipopessoa_tipopessoa`) REFERENCES `tipopessoa` (`n_tipopessoa_tipopessoa`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa`
--

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
INSERT INTO `pessoa` VALUES (1,NULL,3,'Nick','nick@email.com','123',0,'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbcAAAHvCAYAAADXSpFxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAdgSURBVHhe7dXBCcAwAAMxp/vv3ObRKQ4JjEe4s+29A4CM538AyBA3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AGK2D6KRBN1tHMaCAAAAAElFTkSuQmCC','A'),(2,NULL,1,'Law','law@email.com','123',0,'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbcAAAHvCAYAAADXSpFxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAdgSURBVHhe7dXBCcAwAAMxp/vv3ObRKQ4JjEe4s+29A4CM538AyBA3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AGK2D6KRBN1tHMaCAAAAAElFTkSuQmCC','A'),(3,NULL,2,'Pessoa Teste','teste@email.com','123',0,'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbcAAAHvCAYAAADXSpFxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAdgSURBVHhe7dXBCcAwAAMxp/vv3ObRKQ4JjEe4s+29A4CM538AyBA3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AGK2D6KRBN1tHMaCAAAAAElFTkSuQmCC','A'),(4,NULL,2,'Shanks','shanks@email.com','123',0,'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbcAAAHvCAYAAADXSpFxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAdgSURBVHhe7dXBCcAwAAMxp/vv3ObRKQ4JjEe4s+29A4CM538AyBA3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AGK2D6KRBN1tHMaCAAAAAElFTkSuQmCC','A'),(5,NULL,1,'Kaido','kaido@email.com','123',0,'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbcAAAHvCAYAAADXSpFxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAdgSURBVHhe7dXBCcAwAAMxp/vv3ObRKQ4JjEe4s+29A4CM538AyBA3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AGK2D6KRBN1tHMaCAAAAAElFTkSuQmCC','A'),(6,NULL,1,'a','a@email.com','undefined',1,'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbcAAAHvCAYAAADXSpFxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAdgSURBVHhe7dXBCcAwAAMxp/vv3ObRKQ4JjEe4s+29A4CM538AyBA3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AHLEDYAccQMgR9wAyBE3AGK2D6KRBN1tHMaCAAAAAElFTkSuQmCC','A');
/*!40000 ALTER TABLE `pessoa` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-04 23:00:24
