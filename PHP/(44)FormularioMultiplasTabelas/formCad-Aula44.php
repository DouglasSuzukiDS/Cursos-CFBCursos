<?php
//include "../conexao.inc"; Caso o include estiver na pasta anterior
include "conexao.inc";

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset=utf-8">
    <title>CFB Cursos - PHP 44 - MySQL - Formulário com Multiplas Tabelas</title>
</head>

<body>
    <h1>Pesquisa</h1>

    <form name="fcad" action="processaAula44.php" method="get">

        <label>Nome:</label><br>
        <input type="text" name="fnome"><br><br>

        <label>Selecione seu Estado:</label><br>
        <select name="fuf">
            <?php
                $sql = "SELECT * FROM tb_uf order by uf ";
                $res = mysqli_query($con, $sql);
                while ($vreg = mysqli_fetch_row($res)) {
                    $vuf = $vreg[0];
                    $vsigla = $vreg[1];
                    echo "<option value=$vsigla>$vuf</option>";
                }
            ?>
        </select>
        <br><br>

        <label>Selecione seus meios de Transporte Favoritos:</label><br>

        <?php
            $sql = "SELECT * FROM tb_transportes";
            $res = mysqli_query($con, $sql);
            while ($vreg = mysqli_fetch_row($res)) {
                $vcod = $vreg[0];
                $vtra = $vreg[1];
                echo "<input type=checkbox name=ftransp[] value=$vcod>$vtra<br>";
            }
        ?>

        <br>

        <input type="submit" value="Gravar Pesquisa">

    </form>


</body>

</html>

<?php
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