<?php

    $transp=array("Carro", "Moto", "Bicicleta", "Ônibus", "Avião", "Navio");

    //foreach = Pega um elemento de um Array, armazena em uma variavel e executa o comando;

    foreach ($transp as $veiculo){
        echo "$veiculo<br>";
        /*if($veiculo == "Bicicleta"){
            break;
        }*/
    }
    echo "<hr>";

    foreach ($transp as $veiculo){
        if($veiculo == "Bicicleta"){
            echo "Bicicleta está na Lista de Veículos<br>";
            break;
        }

    }
         
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>CFB Cursos - Aula 10 de PHP - Loop Foreach</title>
</head>
<body>
</body>
</html>