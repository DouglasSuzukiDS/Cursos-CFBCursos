<?php

    /*  Para o Metodo GET, onde as insformações são passadas pela URL, tem limitação de tamanho, e mais rápido.
        $vnome=$_GET["f_nome"];
        $vsenha=$_GET["f_senha"];
    */

    /* Para metodo POST, informações passadas internamente, não mostra as insformações na URL, não tem limitação de tamanho, pode demorar um pouco */ 
    $vnome = $_POST["f_nome"];
    $vsenha = $_POST["f_senha"];

    echo "Nome: " .$vnome ."<br>Senha: " .$vsenha ."<br>";

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>CFB Cursos - Aula 13 de PHP - Recebendo dados de Formulário HTML</title>
</head>
<body>
</body>
</html>