<?php

     //mysqli_connect("LOCALHOST", "username", "SENHA*", "QUAL BANCO DE DADOS IRA SER USADO*"): Comando para Conexão;
    //mysqli_select_db(CONECÇÃO, TABELA SELECIONADA);Seleciona o Banco de Dados que quer trabalhar;

    $con = mysqli_connect("localhost", "root", "");
    mysqli_select_db($con, "canalfb");

?>