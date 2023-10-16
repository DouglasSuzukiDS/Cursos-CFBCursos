<?php

    //Final: A palavra reservada final, diz que o método não pode ser sobrescrito. Só pode ser usadoi em Classes e Metodos;

    abstract class CarroBase{ 
        public $cor;
        public $vel = 0;

        function CarroBase($cr){
            $this -> cor = $cr;
        }

        function status(){
            echo "<hr>";
            echo "Carro: ".$this -> cor;
            echo "<br>Velocidade: ".$this -> vel;
            echo "<hr>";
        }

        /* function Cor(){ //Aqui permite sobrescrever
             echo "<hr>";
             echo "Minha cor: ".$this -> cor;
             echo "<br>Método Original<hr>";
        }*/

        final function Cor(){ //Aqui NÃO permite sobrescrever
             echo "<hr>";
             echo "Minha cor: ".$this -> cor;
             echo "<br>Método Original<hr>";
        }
    }

    class Carro extends CarroBase{
        /*function Cor(){ //Aqui o Metodo Cor sobrescreve o Metodo Cor de Carro base. Com o final declarado na Cor() do CarroBase, esses comandos não funcionam;
            echo "<hr>";
            echo "Cor: ".$this -> cor."<hr>";
        }*/
    }

    class Transp extends CarroBase{
    /*final class Transp extends CarroBase{
        Criando classe final, essa classe não pode ser herdada;*/
    }

    $car = new Carro("Vermelho");
    $tra = new Transp("Azul");

    $car -> cor(); 
    $tra -> cor(); 
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>CFB Cursos - Aula 25 de PHP - Classes Parte 6 - Final/title>
</head>
<body>
</body>
</html>