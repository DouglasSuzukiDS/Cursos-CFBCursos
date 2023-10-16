<?php

    session_start(); //Inicia uma sessão 

    if( $_SESSION['vlog'] == "s"){
        $_SESSION['vcanal'] = "CFB Cursos";
    
        echo "<h3>Segunda Página</h3>";   
    
        //unset($_SESSION['vnome']); //Remove a variavel
    
        echo $_SESSION['vnome'];
        echo "<br>". $_SESSION['vtexto'];
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>CFB Cursos - Aula 19 de PHP - PG1</title>
</head>
<body>
    <br><br>
    <a href="(19)Sessoes.php" target="_self">Voltar Aula 19</a><br>
    <a href="pg2.php" target="_self">Terceira Página</a><br>
</body>
</html>

<?php
    }else{
        echo "Acesso Indevido...";
    }
?>
