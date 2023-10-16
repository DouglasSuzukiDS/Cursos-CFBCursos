<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>CFB Cursos - PHP 43 - Trabalhando com Arquivos - Parte 3, Contador de Acessos</title>
</head>

<body>

    <?php
        $arquivo = fopen("contador.txt", "r");
        $cont = fread($arquivo, 21); 
        $cont++; //$cont+=1; cont = cont + 1;
        $arquivo = fopen("contador.txt", "w");
        fwrite($arquivo, $cont);
        fclose($arquivo);

        echo "Quantidade de Acessos: $cont<br>";

        // r = Abre p/leitura, ponteiro no inicio;
        // r+ = Abre p/leitura e escrita;

        // w= Abre p/escrita, ponteiro de inicio e zera, se o arquivo não existir ele o cria;
        // w+ = Abre p/leitura e escrita;

        // a = Abre p/escrita, ponteiro no final (subscreve o conteudo), se o arquivo não existir, ele o cria;
        // a+ = Abre p/leitura/escrita;

        // x = Abre p/escrita, ponteiro no inicio, se o arquivo já existir, ele gera um erro do tipo E_WARNING;
        // x+ = Abre p/leitura e escrita;

    ?>

</body>

</html>