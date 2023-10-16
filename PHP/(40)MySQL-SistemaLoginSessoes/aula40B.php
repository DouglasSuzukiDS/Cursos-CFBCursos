<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>CFB Cursos - PHP 40 - MySQL - Sistema de Login com Sessões, Aula 40B</title>
</head>

<body>

    <?php

        session_start(); //Inicia a sessão;

        if(isset($_SESSION['numLogin'])){ //Verifica se o elemento SESSION existe
            $n1 = $_GET["num1"];
            $n2 = $_SESSION['numLogin'];
            if($n1 != $n2){
                echo "Login não Efetuado";
                exit;
            }
        }else{
            echo "Login não Efetuado";
            exit;
        }

        include "conexao.inc";

        echo "Página Inicial<br>";
        echo "Username: ".$_SESSION['username']."<br>";

        //unset($_SESSION['numLogin']); // Elimina a variavel;

        //session_unregister('numLogin'); //Elemina a variavel;

        //$_SESSION=Array(); //Elimina todas as variaveis;

        //session_destroy(); // Termina a sessão;

        mysqli_close($con);

    ?>

</body>

</html>
