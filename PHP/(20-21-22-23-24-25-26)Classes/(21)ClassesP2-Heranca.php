<?php
    /* 
        Herança: quando uma classe herda propriedades e metodos de outra classe;
            private = Só pode ser acessada pela própria classe;

            protected = Restringe o acesso EXTERNO mas permite acesso de membros que estejam HERDANDO a classe;
    */    

    class aula{
        /*var | private*/protected $var1 = "Bom dia";
        /*var | private*/protected $var2 = "canalfessorbruno@gmail.com";
        /*var | private*/protected $var3 = "www.webvest.com.br";

        function escreve(){
            echo "<br>Metodo da classe aula";
            echo "<br>".$this -> var1;
            echo "<br>".$this -> var2;
            echo "<br>".$this -> var3;
        }
    }

    //Herança
    class canal extends aula{ //Aqui canal HERDA aula
        var $vc1 = "Curso de PHP";
        var $vc2 = "One Peice";

        function escreve2(){
            echo "<br>Metodo da classe canal";
            echo "<br>".$this -> vc1;
            echo "<br>".$this -> vc2;
            //echo "<hr>";
            echo "<br>".$this -> var1; 
            echo "<br>".$this -> var2; 
            echo "<br>".$this -> var3; 
        }
    }
    
    $aulaOBJ = new aula();
    $canalOBJ = new canal();

    $aulaOBJ -> escreve();
    echo "<hr>";
    //$canalOBJ -> escreve();
    $canalOBJ -> escreve2();

    echo "<hr>";
    //echo "<br>".$this -> var1; 
    //echo "<br>".$this -> var2; 
    //echo "<br>".$this -> var3; 
  
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>CFB Cursos - Aula 21 de PHP - Classes Parte 2 - Herança</title>
</head>
<body>
</body>
</html>