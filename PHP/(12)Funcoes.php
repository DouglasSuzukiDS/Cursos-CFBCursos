<?php
    function aula(){
        echo "<hr>Olá Mundo<br>";
        echo "Aula sobre funções<hr>";
    }
    aula();

    function soma($n1, $n2){
        $res= $n1+$n2;
        echo "<br>Soma de $n1 com $n2 = $res<br>" ;
    }
    soma(5,20);

    function soma2($n1, $n2){
        $res=$n1+$n2;
        return $res;
    }
    $so=soma2(10,5);
    echo "<br>Resultado = $so<br>";

    $valores=array(1,3,5,7,9,12,6,4,20,18,19,34,2);
    function media($val){
        $tam=count($val);
        $soma=0;
        for($i=0; $i<$tam; $i++){
            $soma+=$val[$i];
        }
        return $soma / $tam;
    }
    $med=media($valores);
    echo "<br>Média = $med<br>"
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>CFB Cursos - Aula 12 de PHP - Funções</title>
</head>
<body>
</body>
</html>