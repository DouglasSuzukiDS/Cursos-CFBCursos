<?php

    include "conexao.inc"; /* Aqui o o banco de dados esta externo, e ele pode ser usado em arquivos diferentes*/

    $res = mysqli_query($con, "SELECT * FROM tb_cadastro"); //Seleciona todos os arquivos
    $linhas = mysqli_num_rows($res); //Consulta quantas linhas/registros existem
    echo "Encontrados $linhas registros na tabela tb_cadastro";

    mysqli_close($con); //Aqui termina a conexão 

?>

<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<title>CFB Cursos - PHP 29 - Executando Comando MySQL</title>
	</head>
	<body>

	</body>
</html>