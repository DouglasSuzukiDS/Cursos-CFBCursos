<?php

    /*Interface: 
        - Não se pode instanciar um objeto, serve apenas de rascunho para outras classes, permitindo que um objeto herde várias interfaces.
        - Não se pode ter variaveis em uma interface, apenas nomes para os métodos;*/

    interface CarroPadrao{
        function liga();
        function desliga();
        function status();
        function acelera();
        function freia();
    }

    interface CarroGuerra{
        function atiraCanhao();
        function atiraMetralhadora();
    }

    //Implements: Diz que o elemento herda a interface
    abstract class CarroBase implements CarroPadrao, CarroGuerra{
        public $potencia;
        public $velMax;
        private $ligado = false;

        function liga(){
            $this -> ligado = true;
        }

        function desliga(){
            $this -> ligado = false;
        }

        function status(){
            echo "<hr>";
            echo "Potência: ".$this -> potencia;
            echo "<br>Velocidade Máxima: ".$this -> velMax;
            echo "<br>";
            if($this -> ligado){
                echo "Este Carro esta Ligado";
            }else{
                echo "Este Carro NÃO esta Ligado";
            }
            echo "<hr>";
        }

        function acelera(){}
        function freia(){}
        function atiraCanhao(){}
        function atiraMetralhadora(){}
    }

    class Carro extends CarroBase{
        function Carro($pt, $vm){
            $this -> potencia = $pt;
            $this -> velMax = $vm;
            
            $this -> liga();
            $this -> status();
        }
    }

    $carro1 = new Carro(150,280);
    //$carro1 -> liga();
    //$carro1 -> status();

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>CFB Cursos - Aula 23 de PHP - Classes Parte 4 - Interface</title>
</head>
<body>
</body>
</html>