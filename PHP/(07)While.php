<?php

    $i=0;
    $tam=5;
    $vet=array($tam);

    while($i < $tam){
        echo "Valor da Variavel i: $i<br>";
        $i++; //$i = $1 + 1;
    }
    echo "<br><hr><br>";

    $i=0;
    while($i < $tam){
        $vet[$i]="PHP";
        $i++;
    }
    
    $i=0;
    while($i < $tam){
        echo "$vet[$i]<br>";
        $i++;
    }
    
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>Aula 07 de PHP - Loop While</title>
</head>
<body>
</body>
</html>