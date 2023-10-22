-- Vamos aprender sobre Stored Procedures #P1 - Curso de SQL - Aula 37
DELIMITER $$
   CREATE PROCEDURE canal()

   BEGIN
      DECLARE x VARCHAR(50);
      SET x = 'youtube.com/cfbcursos';

      SELECT x;
   END $$
DELIMITER;

CALL canal();

DELIMITER $$
   CREATE PROCEDURE canal(IN curso VARCHAR(50))

   BEGIN
      DECLARE x VARCHAR(50);
      SET x = 'youtube.com/cfbcursos';

      SELECT x, curso;
   END $$
DELIMITER;

CALL canal('React');