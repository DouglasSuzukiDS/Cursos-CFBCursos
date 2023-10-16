<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<title>CFB Cursos - PHP 36 - MySQL - Deletando Registros Selecionados - Parte 1</title>
	</head>
    <body>

    <form name="f_excluir" method="post" action="(36)MySQL-DeletandoRegSelecionadosP1.php">

        <table border="1">
            <tr>
                <td>Codigo</td><td>Nome</td><td>Selecionar</td>
            </tr>

            <?php

                include "conexao.inc";

                $sql = "SELECT * FROM tb_cadastro order by cod"; //Ordenamos pelo Código*
                $res = mysqli_query($con, $sql);

                while($vreg = mysqli_fetch_row($res)){
                    $vcod  = $vreg[0];
                    $vnome = $vreg[1];

                    echo "<tr>";
                    echo "<td>$vcod</td><td>$vnome</td>";
                    echo "<td align=center><input type=checkbox value=$vcod name=sel[]></td>";
                    echo "</td>";
                }
                
                mysqli_close($con); //Aqui termina a conexão 

            ?>
        </table>

        <br>

        <input type="submit" value="Excluir" name="bt_excluir">

    </form>

	</body>
</html> 
    <!--include "conexao.inc"; /* Aqui o o banco de dados esta externo, e ele pode ser usado em arquivos diferentes*/

     //"INSERT INTO nomeTabela (campo) VALUES ('VAR')" = Campo expecifico;

    //"INSERT INTO nomeTabela VALUES ('VAR-CampoTabela')"

    // mysqli_query(CONEXAO, COMANDO);

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
        _ = Marca uma posição especifica dentro da pesquisa; */-->
