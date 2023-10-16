<?php

    

?>

<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<title>CFB Cursos - Aula 26 de PHP - Enviando E-mail</title>
	</head>
	<body>

		<form name="email" method="post" action="envia.php">
            <label>E-mail</label><br>
            <input type="text" name="email_txt"><br>

            <label>Assunto</label><br>
            <input type="text" name="assunto_txt"><br>

            <label>Mensagem</label><br>
            <textarea name="msg_txt" rows="5" cols="50"></textarea><br><br>

            <input type="submit" value="enviar">
        </form>

	</body>
</html>