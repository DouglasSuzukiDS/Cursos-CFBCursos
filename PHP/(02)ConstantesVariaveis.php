<?php

     //Variáveis
    $vnome="Trafalgar";
    $vnum=10;
    $vnum2=20.5;
    $soma=0;

    echo "Nome: $vnome<br>"; //Formar 1
    $vnome="Law";
    echo "Nome: $vnome<br>";
    $vnome="Trafalgar";
    echo "Nome: ".$vnome."<br>"; //Forma 2, PONTO é usado pra concatenar os conteudos,como o + em JS/HTML

    $vsoma=10+20;
    echo "Soma: $vsoma<br>" ;
    /*-------------------------------------------------*/

    //Constantes
    define("cnome","Doflamingo");
    define("ver",PHP_VERSION); //Versão do PHP
    define("dir",__DIR__); //Diretório do Arquivo;

    echo "<hr>";
    echo "Constante cnome: ".cnome."<br>";
    echo "Nome do Arquivo: ". __FILE__."<br>"; //Chama a Const File que diz o caminho com o nome do arquivo;
    echo "Versão do PHP: ".ver."<br>";
    echo "Pasta: ".dir."<br>";

    echo "Versão do SO: ".PHP_OS."<br>"; //Mostra a Versão do SO;
    echo "Número da Linha: ".__LINE__."<br>"; //Número da minha do código;
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>Aula 02 de PHP - Constantes e Variaveis</title>
</head>

<body>

</body>

</html>