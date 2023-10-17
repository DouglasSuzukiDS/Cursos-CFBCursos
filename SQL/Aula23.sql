-- IS NULL vs IS NOT NULL - Curso de SQL - Aula 23
SELECT * FROM cliente;
INSERT INTO cliente VALUES (5, 'Valkisneide', '11223344556', NULL, 1);
INSERT INTO cliente VALUES (6,'Alcinclésio', '65544332211', NULL, 2);
INSERT INTO cliente VALUES (7, 'Nestisgerson', '74125896300', NULL, 3);
INSERT INTO cliente VALUES (8, 'Mordonório','36925814799', NULL, 1);
INSERT INTO cliente VALUES (9, 'Mordonório', '36925814799', NULL, 2);
INSERT INTO cliente VALUES (10, 'Salomildo', '98765432147', NULL, 3);

SELECT * FROM cliente ORDER BY 1 DESC;

SELECT * FROM cliente WHERE d_nasc_cliente IS NULL;
SELECT * FROM cliente WHERE d_nasc_cliente IS NOT NULL;
