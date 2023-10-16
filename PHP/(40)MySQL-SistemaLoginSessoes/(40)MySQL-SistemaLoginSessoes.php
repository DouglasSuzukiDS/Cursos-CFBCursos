<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>CFB Cursos - PHP 40 - MySQL - Sistema de Login com Sessões</title>
</head>

<body>

    <?php

        //include "../conexao.inc"; Caso o include estiver na pasta anterior
        include "conexao.inc";

        $user = $_POST['f_user'];
        $senha = $_POST['f_senha'];

        $sql = "SELECT * FROM tb_cadastro WHERE Username = '$user' AND Senha = '$senha' ";
        $res = mysqli_query($con, $sql);
        $linha = mysqli_affected_rows($con);

        if ($linha > 0) {
            $num = rand(100000, 900000); //Gera um número aleatório
            session_start(); //Inicia a sessão | Não gera arquivo nenhum ao usuario;
            $_SESSION['numLogin'] =  $num; //Variavel na Sessão
            $_SESSION['username'] = $user;
            header("Location:aula40B.php?num1=$num"); //Chama outra página, passando o valor de num;
        } else {
            echo "ERRO no Login<br>";
            echo "<a href='formAula40.html'>Voltar</a>";
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