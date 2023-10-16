<?php

    session_start(); //Inicia uma sessão    
    $_SESSION['vnome'] = "OnePiece"; //Permite criar variavel dentro da sessão
    $_SESSION['vtexto'] = "Texto para teste";
    $_SESSION['vlog'] = "n";

    //unset($_SESSION['vnome']); //Remove a variavel

    echo $_SESSION['vnome'];
    echo "<br>". $_SESSION['vtexto'];

    if(isset($_SESSION['vcanal'])){
        echo "<br>". $_SESSION['vcanal'];
    }else{
        echo "<br>Variavel vcanal NÃO foi definida";
    } 
    
    //session_destroy(); //Finaliza a Sessão;

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>CFB Cursos - Aula 19 de PHP - Sessões</title>
</head>
<body>
    <br>
    <a href="pg1.php" target="_self">Segunda Página</a>
</body>
</html>