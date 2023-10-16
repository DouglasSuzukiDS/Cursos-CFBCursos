<?php
   $servidor = 'localhost';
   $user = 'root';
   $senha = 'OnePiece';
   $db = 'agenda';
   $con = new mysqli($servidor, $user, $senha, $db);

   $dados = array()
   
   $dados[] = array(
      'id' => '1',
      'nome' => 'Shanks'
   );

   echo json_decode($dados);
?>