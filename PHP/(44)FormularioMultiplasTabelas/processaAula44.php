<?php
//include "../conexao.inc"; Caso o include estiver na pasta anterior
    include "conexao.inc";

    $vnome = $_GET["fnome"];
    $vuf = $_GET["fuf"];
    $vt_tmp = Array(0,0,0,0);

    echo "Nome: $vnome - Estado: $vuf<br>";
    echo "Transportes Selecionados: <br>";

    foreach($_GET["ftransp"] as $tra){
        $vt_tmp[$tra-1]=1;
        echo "$tra<br>";
    }

    echo "<hr>";

    $sql = "INSERT INTO tb_pesquisa VALUES(NULL, '$vnome', '$vuf', '$vt_tmp[0]', '$vt_tmp[1]', '$vt_tmp[2]', '$vt_tmp[3]')";

    $res = mysqli_query($con, $sql);

    echo "Pesquisa Gravada";


    mysqli_close($con);
?>


<!--include "conexao.inc"; /* Aqui o o banco de dados esta externo, e ele pode ser usado em arquivos diferentes*/

    //include "../conexao.inc"; Caso o include estiver na pasta anterior

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