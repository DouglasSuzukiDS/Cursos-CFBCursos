<?php

    //Abstract: Não pode ser instânciada, serve somente para servir de base para outras bases;

    abstract class CarroBase{
        public $potencia;
        public $velMax;
        public $portas;
        public $ligado = false;

        abstract function teste(); //Sempre em um Metodo Abstrato, toda a classe que herda essa classe, tem que implementar o Metodo, já que aqui ele não pode ter código;

        function liga(){
            $this -> ligado = true;
        }

        function desligar(){
            $this ->  ligado = false;
        }

        function status(){
            echo "<hr>";
            echo "Potência: ".$this -> potencia;;
            echo "<br>Velocidade Máxima: ".$this -> velMax;
            echo "<br>Portas: ".$this -> portas;
            echo "<br>";
            if($this -> ligado){
                echo "Carro Ligado";
            }else{
                echo "Carro Desligado";
            }
            echo "<hr>";          
        }
    }

   class Carro extends CarroBase{
       function Carro($pt, $vm, $po){ //Construtor
            $this -> potencia = $pt;
            $this -> velMax = $vm;
            $this -> portas = $po;
            $this -> status();

       }
       function teste(){} // Metodo Abstrado
   }

    $carro1 = new Carro(150,280,4);
    //$carro1 -> liga();
    //$carro1 -> status();
    $carro2 = new Carro(100,180,4);
    $carro3 = new Carro(88,140,2);
    $carro4 = new Carro(300,380,4);

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>CFB Cursos - Aula 22 de PHP - Classes Parte 3 - Abstract</title>
</head>
<body>
</body>
</html>