-- Como usar CURSOR em Stored Procedures - Curso de SQL - Aula 40

DELIMITER $$
   CREATE PROCEDURE somaVendas(OUT soma FLOAT(10, 2))

   BEGIN
      DECLARE vv FLOAT(10, 2) DEFAULT 0;
      DECLARE fimLoop INT DEFAULT 0;

      DECLARE meuCursor CURSOR FOR SELECT f_valor_venda FROM venda;
      DECLARE CONTINUE HANDLER FOR NOT FOUND SET fimLoop = 1;

      SET soma = 0;

      OPEN meuCursor;
         WHILE(fimLoop != 1) DO
            FETCH meuCursor INTO vv;
            SET soma = soma + vv;
         END WHILE;
   END $$
DELIMITER

CALL somaVendas(@ret);
SELECT ROUND(@ret, 2);