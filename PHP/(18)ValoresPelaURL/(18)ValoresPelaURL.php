<?php

    //Assim passa o conteudo da variavel pela URL
    /*$texto="Aula";
    echo "<a href=pg1.php?tx=".$texto." target=_self>Abre PG1</a>";*/

    //urlencode = Passa o valor da variavel com espaços
    //Para separar as variaveis se us &
    $texto="Curso de PHP";
    $nome="OnePiece";
    $canal="Canal Fessor Bruno";
    echo "<a href=pg1.php?tx=".urlencode($texto)."&no=".urlencode($nome)."&cn=".urlencode($canal). " target=_self>Abre PG1</a>";
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>CFB Cursos - Aula 18 de PHP - Passagem de Valores pela URL</title>

</head>
<body>
</body>
</html>