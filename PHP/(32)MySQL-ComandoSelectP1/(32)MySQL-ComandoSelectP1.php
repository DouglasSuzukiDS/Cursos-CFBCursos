<?php

    include "conexao.inc"; /* Aqui o o banco de dados esta externo, e ele pode ser usado em arquivos diferentes*/

    //"INSERT INTO nomeTabela (campo) VALUES ('VAR')" = Campo expecifico;

    //"INSERT INTO nomeTabela VALUES ('VAR-CampoTabela')"

    // mysqli_query(CONEXAO, COMANDO);

    // mysqli_num_rows(ELEMENTO PARA PESQUISA) = Número de registros;

    //Select = Seleciona dados para consulta na tabela;
    // "SELECT * FROM tabeleba WHERE"quando" condição de busca";

    /*$vcat = $_POST["F_Cat"]; //Elementos expecificos da Categoria via Forms
    $sql = "SELECT * FROM tb_produtos WHERE cat = $vcat";*/

    /*$vcat1 = 1;  // Pesquisas Multiplas;
    $vcat2 = 2;
    $sql = "SELECT * FROM tb_produtos WHERE cat = $vcat1 OR cat = $vcat2";*/

    $vcat1 = $_POST["F_Cat1"];  // Pesquisas Multiplas via Forms;
    $vcat2 = $_POST["F_Cat2"];
    $sql = "SELECT * FROM tb_produtos WHERE cat = $vcat1 OR cat = $vcat2";

    $res = mysqli_query($con, $sql);
    $lin = mysqli_num_rows($res);
    echo "$lin Registros encontrados";

    mysqli_close($con); //Aqui termina a conexão 

?>

<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<title>CFB Cursos - PHP 32 - MySQL - Comando Select</title>
	</head>
    <body>

	</body>
</html>