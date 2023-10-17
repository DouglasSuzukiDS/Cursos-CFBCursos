-- Comando CREATE, criando banco de dados (schema) e tabelas (table) / DDL - Curso de SQL - Aula 03

CREATE DATABASE cfbcursos;

CREATE TABLE cliente(
   i_cliente_cliente INT PRIMARY KEY AUTO_INCREMENT,
   s_nome_cliente VARCHAR(50) NOT NULL,
   s_cpf_cliente VARCHAR(11) NOT NULL,
   d_nasc_cliente DATETIME
);