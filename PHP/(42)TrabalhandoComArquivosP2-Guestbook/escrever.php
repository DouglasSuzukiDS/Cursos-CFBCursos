<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>CFB Cursos - PHP 42 - Trabalhando com Arquivos - Parte 2, Guestbook - Livro de Visitas</title>
</head>

<body>

    <?php

        $nome = $_POST['f_nome'];
        $msg = $_POST['f_msg'];
        $conteudo = $msg."\r\n".$nome."\r\n"; // \r\n = Quebra de linha no arquivo 

        $arquivo = fopen("visitas.txt", "a");
        fwrite($arquivo, $conteudo);

        echo "Mensagem Gravada: $conteudo";

        fclose($arquivo);


    ?>

    <hr>
    <a href="index.html" target="_self">Voltar</a>

</body>

</html>