<?php
    // include "../conexao.ini"; //Caso o include estiver na pasta anterior
    include "conexao.inc";

    $vnome = $_GET['f_nome'];
    $vsenha = $_GET['f_senha'];
    $vsexo = $_GET['f_sexo'];
    $vesporte = $_GET['f_esporte'];

    if(isset( $_GET['f_tcarro'])){
        $vtcarro = $_GET['f_tcarro'];
        //ou $vtcarro = 1; //Porque se ele for selecionado vem com o valor 1
    }else{
        $vtcatto = 0;
    }

    if(isset($_GET['f_tmoto'])){
        $vtmoto = $_GET['f_tmoto'];
    }else{
        $vtmoto = 0; 
    }

    if(isset($_GET['f_onibus'])){
        $vtonibus = $_GET['f_onibus'];
    }else{
        $vtonibus = 0;
    }

    $vcoment = $_GET['f_coment'];

    $sql = "INSERT INTO tb_revisao VALUE (NULL, '$vnome', '$vsenha', '$vsexo', '$vesporte', '$vtcarro', '$vtmoto', '$vtonibus', '$vcoment')";
    $res = mysqli_query($con, $sql);

    echo "Registro Gravado<br>";
    echo "<a href=formRevisao.html target=_self>Voltar</a>";

    mysqli_close($con);
?>