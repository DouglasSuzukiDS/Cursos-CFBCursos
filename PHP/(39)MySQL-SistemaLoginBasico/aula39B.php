<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>CFB Cursos - PHP 39 - MySQL - Sistema de Login Básico, Aula 39B</title>
</head>

<body>

    <?php

        if(isset($_COOKIE['numLogin'])){ //Verifica se o elemento Cookie existe
            $n1 = $_GET["num1"];
            $n2 = $_COOKIE['numLogin'];
            if($n1 != $n2){
                echo "Login não Efuetuado";
                exit;
            }
        }else{
            echo "Login não Efuetuado";
            exit;
        }

        include "conexao.inc";

        echo "Página Inicial";

        mysqli_close($con);

    ?>


</body>

</html>
