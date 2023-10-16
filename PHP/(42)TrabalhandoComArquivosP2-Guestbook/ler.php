<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>CFB Cursos - PHP 42 - Trabalhando com Arquivos - Parte 2, Guestbook - Livro de Visitas</title>
</head>

<body>

    <?php

        $arquivo = fopen("visitas.txt", "r");
        while(!feof($arquivo)){ //feof(arquivo) = Função que retorna TRUE quando chega no final do arquivo
            echo fgets($arquivo, 4096); //fgets(arquivo, tamanho em bytes do arquivo) = Retorna o valor da linha;
            echo "<br>".fgets($arquivo, 100);
            echo "<br><br>";
        }

        fclose($arquivo);

    ?>

    <hr>
    <a href="index.html" target="_self">Voltar</a>

</body>

</html>