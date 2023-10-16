<?php

    //Classes = Conjuntos de Propriedades(variaveis) e Metodos(funções);

    class Carro{
        var $tipo; //1 = Passeio; 2 = Esporte; 3 = Utilitario;
        var $VelMax;
        var $nome;
        var $liga;
        var $vel;
        
        function Carro($tp, $no){ //Classe Construtora
            //$THIS se refere a variavel da propriedade;
            $this -> tipo = $tp;
            $this -> liga = false; 
            $this -> nome = $no;
            $this -> vel = 0;
            if($tp == 1){
                $this -> velMax=160;
            }else if($tp == 2){
                 $this -> velMax=300;
            }else{
                 $this -> velMax=100;
            }
        }

        function ligar(){
            $this -> liga = true;
        }

        function desligar(){
            $this -> liga = false;
        }

        function velocidade($vl){
            if($vl > $this -> velMax){
                $this -> vel = $this -> velMax;
            }else{
                $this -> vel = $vl;
            }
        }

        function id(){
            echo "<hr>";
            echo "Nome do Carro: ".$this -> nome;
            echo "<br>Tipo do Carro: ".$this -> tipo;
            echo "<br>Velocidade Máxima: ".$this -> velMax;
            echo "<br>Velocidade Atual: ".$this -> vel;

            if($this -> liga){
                echo "<br>Este Carro esta LIGADO";
            }else{
                echo "<br>DESLIGADO";
            }
        }
    }

    $carro1 = new Carro(2,"Rapid");
    $carro2 = new Carro(3,"Carregador");
    $carro3 = new Carro(1,"Basic");
    $carro4 = new Carro(2,"Veloz");
    $carro5 = new Carro(2,"Flexa");

    $carro1 -> ligar();
    $carro3 -> ligar();
    $carro5 -> ligar();

    $carro5 -> velocidade(200);
    $carro3 -> desligar();

    $carro1 -> id();
    $carro2 -> id();
    $carro3 -> id();
    $carro4 -> id();
    $carro5 -> id();

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>CFB Cursos - Aula 20 de PHP - Classes Parte 1</title>
</head>
<body>
</body>
</html>