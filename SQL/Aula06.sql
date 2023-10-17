-- SQL - Tipos de Dados mais comuns - Curso de SQL - Aula 06

-- Dados de Texto
/*Tipo de Text | Maximo de bites
Tinytext   => 255
Text       => 65.535
Mediumtext => 16.777.215
Longtext   => 4.294.967.295

char       => 255 // Tamanho fixo
varchar    => 65.535 // Tamanho variavel */

ALTER TABLE cliente ADD i_idade_cliente INT;

ALTER TABLE cliente MODIFY COLUMN i_idade_cliente TINYINT;