<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>CFB Cursos - PHP 41 - MySQL - Trabalhanndo com Arquivos - Parte 1</title>
</head>

<body>

    <?php

        // r = Abre p/leitura, ponteiro no inicio;
        // r+ = Abre p/leitura e escrita;

        // w= Abre p/escrita, ponteiro de inicio e zera, se o arquivo não existir ele o cria;
        // w+ = Abre p/leitura e escrita;

        // a = Abre p/escrita, ponteiro no final (subscreve o conteudo), se o arquivo não existir, ele o cria;
        // a+ = Abre p/leitura/escrita;

        // x = Abre p/escrita, ponteiro no inicio, se o arquivo já existir, ele gera um erro do tipo E_WARNING;
        // x+ = Abre p/leitura e escrita;

        //$arquivo=fopen("aula.txt", "x"); // Abre o arquivo ("NOME","COMANDO");

        $arquivo = fopen("aula.txt", "a");
        fwrite($arquivo, "\r\nCurso de PHP"); // \r\n = Quebra a linha; Escreve no conteudo

        $arquivo = fopen("aula.txt", "r");
        $conteudo = fread($arquivo,100); //Le o arquivo ("arquivo", tamanho de bytes para serem lidos);

        echo "$conteudo";

        fclose($arquivo); //Fecha o Arquivo;

    ?>


</body>

</html>