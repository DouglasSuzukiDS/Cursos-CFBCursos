<?php

    include "conexao.inc"; /* Aqui o o banco de dados esta externo, e ele pode ser usado em arquivos diferentes*/

    //"INSERT INTO nomeTabela (campo) VALUES ('VAR')" = Campo expecifico;

    //"INSERT INTO nomeTabela VALUES ('VAR-CampoTabela')"

    // mysqli_query(CONEXAO, COMANDO);

    $vnone="Zig";
    $vuser="Zag";
    $vsenha="123";
    $vemail="canalfessorbruno@gmail.com";
    $vtel="0800";
    $vst=1;
    $vobs="Tudo Ok";

    $sql="INSERT INTO tb_cadastro VALUES (NULL, '$vnone', '$vuser', '$vsenha', '$vemail', ' $vtel', $vst, '$vobs')";
    $res=mysqli_query($con, $sql);

    $num=mysqli_affected_rows($con); //Linhas afetados, inseridas

    echo "$num registro inserido.";

    mysqli_close($con); //Aqui termina a conexão 

?>

<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<title>CFB Cursos - PHP 30 - MySQL - COmando Insert</title>
	</head>
	<body>

	</body>
</html>