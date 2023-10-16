<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<title>CFB Cursos - PHP 33 - MySQL - Comando Select Parte 2</title>
	</head>
    <body>
        <table border="1">
            <tr>
                <td>Codigo</td><td>Produto</td><td>Preco</td><td>QTDE</td><td>Categoria</td>
            </tr>
            <?php

                include "conexao.inc"; /* Aqui o o banco de dados esta externo, e ele pode ser usado em arquivos diferentes*/

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
                
                $vcat1 = $_POST["F_Cat1"];
                $vcat2 = $_POST["F_Cat2"];

                $sql = "SELECT * FROM tb_produtos WHERE cat = $vcat1 OR $vcat2";
                $res = mysqli_query($con, $sql);

                while($vreg = mysqli_fetch_row($res)){
                    $vcod = $vreg[0];
                    $vprod = $vreg[1];
                    $vpreco = $vreg[2];
                    $vqtde = $vreg[3];
                    $vcat = $vreg[4];
                    
                    echo "<tr>";
                    echo "  <td>$vcod</td>
                            <td>$vprod</td>
                            <td>$vpreco</td>
                            <td>$vqtde</td>
                            <td>$vcat</td>";
                    echo "<tr>";
                }

                mysqli_close($con); //Aqui termina a conexão 

            ?>
        </table>
	</body>
</html> 