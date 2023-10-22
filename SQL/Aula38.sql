-- Como usar parâmetros de entrada, saída e o comando IF em Stored Procedures - Curso de SQL - Aula 38

DELIMITER $$
   CREATE PROCEDURE idade(IN idCliente INT, OUT idade INT)

   BEGIN
      DECLARE dt DATETIME;

      SET dt = (SELECT d_nasc_cliente FROM cliente WHERE i_cliente_cliente = idCliente);

      SET idade = YEAR(now()) - YEAR(dt);

   END $$
DELIMITER

CALL idade(1, @idadeCliente); -- @idadeCliente => É uma variavel
SELECT @idadeCLiente;

DELIMITER $$
   CREATE PROCEDURE idade(IN idCliente INT, OUT idade INT, OUT res VARCHAR(20))

   BEGIN
      DECLARE dt DATETIME;

      SET dt = (SELECT d_nasc_cliente FROM cliente WHERE i_cliente_cliente = idCliente);

      SET idade = YEAR(now()) - YEAR(dt);

      IF(idade >= 18) THEN
         SET res = 'Maior';
      ELSE 
         SET res = 'Menor';
      END IF;

   END $$
DELIMITER

CALL idade(4, @idadeCliente, @resultado); -- @idadeCliente => É uma variavel
SELECT @idadeCLiente, @resultado;
