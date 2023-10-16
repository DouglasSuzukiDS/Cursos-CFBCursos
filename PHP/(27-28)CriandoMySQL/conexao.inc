<?php

     //mysqli_connect("LOCALHOST", "username", "SENHA*"): Comando para Conecção;
    //mysqli_select_db(CONECÇÃO, TABELA SELECIONADA);Seleciona o Banco de Dados que quer trabalhar;

    $con = mysqli_connect("localhost", "root", "");
    mysqli_select_db($con, "tb_cadastro");

?>