<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>CFB Cursos - PHP 38 - MySQL - Comando Update</title>
</head>

<body>

    <?php

    include "conexao.inc";

    //UPDATE tabela SET campo a ser alterado WHERE condição;
    $sql = "UPDATE tb_cadastro SET Telefone = '0500' WHERE Cod = 14 ";

    $res = mysqli_query($con, $sql);

    if($res){
        echo "Registro Atualizado com Sucesso!";
    }else{
        echo "ERRO na Atualização do Registro";
    }

    mysqli_close($con);

    ?>


</body>

</html>
<!--include "conexao.inc"; /* Aqui o o banco de dados esta externo, e ele pode ser usado em arquivos diferentes*/

     //"INSERT INTO nomeTabela (campo) VALUES ('VAR')" = Campo expecifico;

    //"INSERT INTO nomeTabela VALUES ('VAR-CampoTabela')"

    // mysqli_query(CONEXAO, COMANDO) = Roda o comando;

    // mysqli_num_rows(ELEMENTO PARA PESQUISA) = Número de registros;

    // mysqli_fetch_rows(ELEMENTO PARA PESQUISA) = Organiza os elementos uem um Vetor

    //Select = Seleciona dados para consulta na tabela;
    /* "SELECT * FROM tabela WHERE"quando" condição de busca";
        * = Todos || Quais elementos
        FROM = De 
        WHERE = quando*/
    
    //LIKE = Operador que permite fazer a busca de um certo valor;
    //Not LIKE = Usado para retornar valores que não contenham um certo caractere;
    /* "SELECT * FROM tabela WHERE >CAMPO DE PESQUISA< LIKE '%VALOR%' ";
        % = Usado para especificar qualquer caractere apartir dos parametros
        _ = Marca uma posição especifica dentro da pesquisa; */

    //isset($_POST['f_del']); //Verifica se o elemento já existe no programa, retorna TRUE ou FALSE
                
    //foreach = Pega um elemento do vetor, e armazena o valor em uma variavel 

    //UPDATE = Usado para modificar dados;
        //UPDATE tabela SET campo a ser alterado WHERE condição
    -->