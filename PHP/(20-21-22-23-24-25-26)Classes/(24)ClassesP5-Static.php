<?php

    /*Static: 
        - Pertence a classe e não ao objeto, pois usa um endereço fixo de memória;
        - Quando se modifica o valor, todos os elementos tem a propriedade alteradas, pois usam o mesmo endereço de memória; 
            $this-> = Pertence ao Objeto. É usado para alterar a propriedade do objeto;

            self:: Pertence a Classe. É usado para alterar a propriedade da classe, onde o valor vale para todas as suas instâncias; */
    
    class Carro{
        public $cor;
        public static $vel;

        // function Carro($cr, $vl){
        function Carro($cr){
            $this -> cor = $cr;
            self:: $vel = 0;
        }

        function mudaVel($vl){
            self:: $vel = $vl;
        }

        function status(){
            echo "<hr>";
            echo "Cor: ".$this -> cor;
            echo "<br>Velocidade: ". self:: $vel;
            echo "<hr>";
        }
    }

    //$car1 = new Carro("Vermelho", 200);
    //$car2 = new Carro("Verde", 150);
    $car1 = new Carro("Vermelho");
    $car2 = new Carro("Verde");
    $car3 = new Carro("Azul");

    $car1 -> status();
    $car2 -> status();
    $car3 -> status();

    echo "<br>Velocidade Alterada<br><br>";
    $car1 -> mudaVel(100);

    $car1 -> status();
    $car2 -> status();
    $car3 -> status();

    echo "<br>Velocidade Alterada<br><br>";
    $car2 -> mudaVel(230);

    $car1 -> status();
    $car2 -> status();
    $car3 -> status();

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>CFB Cursos - Aula 24 de PHP - Classes Parte 5 - Static/title>
</head>
<body>
</body>
</html>