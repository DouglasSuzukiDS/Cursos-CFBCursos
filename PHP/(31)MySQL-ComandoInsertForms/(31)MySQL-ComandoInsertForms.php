<?php

    include "conexao.inc"; /* Aqui o o banco de dados esta externo, e ele pode ser usado em arquivos diferentes*/

    //"INSERT INTO nomeTabela (campo) VALUES ('VAR')" = Campo expecifico;

    //"INSERT INTO nomeTabela VALUES ('VAR-CampoTabela')"

    // mysqli_query(CONEXAO, COMANDO);

    $vcod = $_POST["F_Cod"]; /* Captura os intens do Formulário */
    $vprod = $_POST["F_Prod"];
    $vpreco = $_POST["F_Preco"];
    $vqtde = $_POST["F_Qtde"];

    $sql = "INSERT INTO tb_produtos VALUES ('$vcod', '$vprod', $vpreco, $vqtde)"; //Liga a tabela com o banco de dados

    $res = mysqli_query($con, $sql); //Insere no banco de dados;

    $linhas = mysqli_affected_rows($con); //Linhas afetadas;

    if($linhas == 1){
        echo "Registro Gravado com Sucesso<br>";
    }else{
        echo "Falha na Gravação do Registro<br>";
    }

    mysqli_close($con); //Aqui termina a conexão 

?>

<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<title>CFB Cursos - PHP 31 - MySQL - Comando Insert com Formulário</title>
	</head>
    <body>
    <br>
    <a href="formulario-31.html">Voltar</a>

	</body>
</html>