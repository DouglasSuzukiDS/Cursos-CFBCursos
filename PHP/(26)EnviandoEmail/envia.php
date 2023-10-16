<?php

    $vmail = $_POST['email_txt'];
    $vassunto = $_POST['assunto_txt'];
    $vmsg = $_POST['msg_txt'];

    /*mail(PARA QUEM VAI, ASSUNTO, MENSAGEM, "CABEÇALHO"):  Se o envio do email não conter erro, retorna TRUE;
        Replay-To = Para quem vai mandar a resposta;
        From = Para outra pessoa;
        Cc = Destinatários diferentes;
        Bcc = Copia da mensagem para outros emails
        Comments = Adicionar informaçõesde quem esta enviando o email;
        Content-Type = Expecifica a forma de envio;
            text_html: Enviado em formato HTML;
        Date = Informar a data de envio;
        Subject = Expecifica o assunto;
    */

    // if(mail($vmail,$vassunto,$vmsg)){
     if(mail($vmail, $vassunto, $vmsg, "Replay-To: resp_canal@gmail.com")){ 
    // if(mail($vmail, $vassunto, $vmsg, "From: outroEmail@gmail.com\n Replay-To: resp_canal@gmail.com"
        echo "Mensagem Enviada<br>";
        echo "<a href=(26)EnviandoEmail.php target=_self>Voltar</a>";
    }else{
        echo "Erro ao Enviar, tente novamente";
    }

?>

<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<title>CFB Cursos - Aula 26 de PHP - Enviando E-mail - envia.php</title>
	</head>
	<body>

	</body>
</html>