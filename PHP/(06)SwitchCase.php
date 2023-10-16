<?php

    $opc=2; // 1:Carro; 2:Moto; 3:Bicicleta; 4:Navio; 5:Avião

    switch($opc){
        case 1: 
            echo "Carro";
            break;
        case 2: 
            echo "Moto";
            break;
        case 3:
            echo "Bicicleta";
            break;
        case 4:
            echo "Navio";
            break;
        case 5:
            echo "Avião";
            break;
        default:
            echo "Transporte Inválido";
            break;
    }

    echo "<hr>";

    switch($opc){
        case ($opc <= 3 and $opc > 0);
            echo "Transporte Terrestre";
            break;
        case 4:
            echo "Transporte Maritimo";
            break;
        case 5:
            echo "Transporte Aereo";
            break;
    }
    
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>Aula 06 de PHP - Comando Switch Case</title>
</head>
<body>
</body>
</html>