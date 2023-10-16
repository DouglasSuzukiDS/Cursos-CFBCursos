<?php

    session_start(); //Inicia uma sessão 
    echo "<h3>Terceira Página</h3>";   

    //unset($_SESSION['vnome']); //Remove a variavel

    echo $_SESSION['vnome'];
    echo "<br>". $_SESSION['vtexto'];
    echo "<br>".$_SESSION['vcanal'];

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>CFB Cursos - Aula 19 de PHP - PG2</title>
</head>
<body>
<br><br>
    <a href="(19)Sessoes.php" target="_self">Voltar Aula 19</a><br>
    <a href="pg1.php" target="_self">Segunda Página</a><br>
</body>
</html>