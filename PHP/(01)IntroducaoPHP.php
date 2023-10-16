<?php

	//Comentário Simples em PHP
	/* 	Comentário em Bloco
		O PHP retorna um conteudo HTML, por isso é possível usar comandos HTML em seus códigos;
		É possível inserir códigos PHP em um conteúdo HTML

		echo = Comando para Escrita;
	*/

	echo "<font color=#F00>Primeira linha PHP</font><br>";
	echo "Curso de PHP";

?>

<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<title>Aula 01 de PHP</title>
	</head>
	<body>
		<p>Escrita em HTML</p>

		<?php
			echo "Escrita em PHP";
		?>
	</body>
</html>