<?php

    $dia = date("d");
    $mes = date("m"); // Numero do Mes
    $ano = date("Y"); // y = Ano com 2 Digitos* | Y = Ano com 4 Digitos

    $meses=Array("Janeiro", "Fevereiro", "Março",  "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "dezembro");

    $hora = date("H"); // h = 12H | H = 24H 
    $minuto = date("i");
    $segundo = date("s");
   
    echo $dia." de ".$meses[$mes-1]." de ".$ano."<br>";
    echo $hora.":".$minuto.":".$segundo; //Hora não configurada para nosso fuso-horario

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>CFB Cursos - Aula 15 de PHP - Manipulando Data e Hora</title>
</head>
<body>
</body>
</html>