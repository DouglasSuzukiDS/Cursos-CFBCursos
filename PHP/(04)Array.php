<?php
	
	//Arrays = São um conjunto de variaveis do mesmo tipo;
	$vet=Array(7); //Tamanho do array
	//$vet2=Array(100,200,300); //Valores do Array

	$vet2=Array("nome"=>"Kaido", "cidade"=>"JP", "curso"=>"PHP"); //É possivel fazer o Array com o indice nomeado já com um valor

	$mat=Array(
		array("Carro1", 65000),
		array("Carro2", 35000),
		array("Carro3", 50000)
	);

	$i=6;

	echo "Carro A ".$mat[0][0]." - Valor: ".$mat[0][1]."<br>";
	echo "Carro B ".$mat[1][0]." - Valor: ".$mat[1][1]."<br>";
	echo "Carro C ".$mat[2][0]." - Valor: ".$mat[2][1]."<hr>";

	$vet[0]="Carro";
	$vet[1]="Aviao";
	$vet[2]="Navio";
	$vet[3]="Moto";
	$vet[4]="Onibus";
	$vet[5]=123456;
	$vet[6]=$vet2["nome"];

	echo "Elemento de indice $i = ".$vet[6]."<br>";

	echo "Nome: " .$vet2["nome"]." - Cidade: ".$vet2["cidade"]. " - Curso: ".$vet2["curso"]."<br>";
?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html, charset UTF-8">
    <meta charset="UTF-8">
    <title>Aula 04 de PHP - Arrays/Vetores</title>
</head>
<body>
</body>
</html>