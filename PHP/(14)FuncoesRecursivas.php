<?php

    function aula($num){
        if($num != 0){
            echo "Função Aula com Valor $num <br>";
            aula($num-1);
        }
    }    
    //aula(10);                                                            

    //4! = 4x3x2x1 = 24
    //3! = 3x2x1 = 6
    function fat($num){
        if($num < 0){
            return -1;
        }
        if($num <= 1){
            return 1;
        }
        return $num*fat($num-1);
    }

    echo "Fatorial de 6: ".fat(6);    

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>CFB Cursos - Aula 14 de PHP - Funções Recursivas</title>
</head>
<body>
</body>
</html>