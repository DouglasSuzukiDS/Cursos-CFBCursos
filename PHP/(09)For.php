<?php
    
    $i=0;
    $tam=5;
    $vet=array($tam);

    for($i=0; $i < $tam; $i++){
        echo "Valor de i: $i<br>";
    }

    echo "<br>";
    for($i=0; $i < 30; $i++){
        echo "-";
    }
    echo "<br><br>";

    for($i=0; $i < $tam; $i++){
        $vet[$i]=$i*2;
    }

    for($i=0; $i < $tam; $i++){
        echo "Valor da posição $i: $vet[$i]<br>";
    }

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>CFB Cursos - Aula 09 de PHP - Loop For</title>
</head>
<body>
</body>
</html>