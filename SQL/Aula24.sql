-- Operadores AND, OR e NOT - Curso de SQL - Aula 24
SELECT * FROM cliente
WHERE
   d_nasc_cliente IS NOT NULL AND i_tipo_cliente = 1;

SELECT * FROM cliente
WHERE
   d_nasc_cliente IS NULL OR i_tipo_cliente = 1;

SELECT * FROM cliente
WHERE
   NOT i_tipo_cliente = 1 AND NOT i_tipo_cliente = 2 
   OR NOT d_nasc_cliente IS NOT NULL;
