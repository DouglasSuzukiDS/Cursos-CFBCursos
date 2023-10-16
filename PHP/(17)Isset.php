<?php
    //isset = Mostra se o elemento está definido no programa, retorna TRUE ou FALSE;

    //Com o fechamanto do IF-ELSE após o conteudo HTML, o arquivo contido no HTML sera mostrado apenas quando o IF tiver condição NÃO SATISFATÓRIA;

    /*$aula;

    if(isset($aula)){
        echo "Variável aula foi definida";
    }else{
        echo "Variável NÃO definida";
    }*/

    if(isset($_POST["f_nome"])){
        $vnome=$_POST["f_nome"];
        echo "Nome: $vnome<br>";
    }else{
        echo "Dados não submetidos";

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>CFB Cursos - Aula 17 de PHP - Função Isset</title>

</head>
<body>
    <br><br>
    
    <form name="f_aula" method="post" action="(17)Isset.php">
        <label>Nome:</label><br>
        <input type="text" name="f_nome"><br>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>

<?php
    }
?>