-- Como criar Loops em Stored Procedures - Curso de SQL - Aula 39
DELIMITER $$
   CREATE PROCEDURE loopWhile(OUT soma INT)

   BEGIN
      DECLARE x INT DEFAULT 0;

      WHILE(x < 10) DO
         SET x = x + 1;
      END WHILE;

      SET soma = x;
   END $$
DELIMITER;

CALL loopWhile(@ret);
SELECT @ret;


DELIMITER $$
   CREATE PROCEDURE loopWhile(IN max INT, OUT soma INT)

   BEGIN
      DECLARE x INT DEFAULT 0;

      WHILE(x < max) DO
         SET x = x + 1;
      END WHILE;

      SET soma = x;
   END $$
DELIMITER;

CALL loopWhile(10, @ret);
SELECT @ret;

DELIMITER $$
   CREATE PROCEDURE loopLoop(IN max INT, OUT soma INT)

   BEGIN
      DECLARE x INT DEFAULT 0;

      meuLoop: LOOP
         IF(x >= max) THEN
            LEAVE meuLoop;
         END IF;

         SET x = x + 1;

      END LOOP;

      SET soma = x;
   END $$
DELIMITER;
CALL loopLoop(10, @ret);
SELECT @ret;