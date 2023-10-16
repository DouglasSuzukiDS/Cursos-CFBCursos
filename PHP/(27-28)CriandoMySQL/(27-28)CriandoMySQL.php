<?php

    //(27)Criando Bando de Dados MySQL;
    //(28)Conectando ao Banco de Dados

    //Banco de Dados = Conjunto de Tabelas, que são um conjunto de linhas e colunas, e nela que armazenamos os dados;
    
    //mysqli_connect("LOCALHOST", "username", "SENHA*"): Comando para Conecção;
    //mysqli_select_db(CONECÇÃO, TABELA SELECIONADA);Seleciona o Banco de Dados que quer trabalhar;

    /*$con = mysqli_connect("localhost", "root", "");
    mysqli_select_db($con, "tb_cadastro"); Chama o para o prorio arquivo*/

    include "conexao.inc"; /* Aqui o o banco de dados esta externo, e ele pode ser usado em arquivos diferentes*/

    mysqli_close($con); //Aqui termina a conexão 

?>

<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<title>CFB Cursos - Aula 27, 28 de PHP - Banco de Dados MySQL</title>
	</head>
	<body>

	</body>
</html>