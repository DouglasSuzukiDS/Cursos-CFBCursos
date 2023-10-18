-- Operador IN - Curso de SQL - Aula 29

INSERT INTO cliente VALUES (11, 'Tonhao', '00000000171', '2000-01-01', 01);
INSERT INTO cliente VALUES (12, 'Tonhaozin', '00000000172', '2009-01-01', 01);
INSERT INTO cliente VALUES (13, 'Tonho', '00000000173', '2010-05-05', 01);

SELECT * FROM cliente WHERE
   RIGHT(s_cpf_cliente, 1) = 0 -- Termina com 0 OR 
   RIGHT(s_cpf_cliente, 1) = 1; -- Termina com 1

SELECT * FROM cliente WHERE
   RIGHT(s_cpf_cliente, 1) IN (0, 1, 2);

SELECT 
   d_nasc_cliente 
FROM cliente WHERE 
   d_nasc_cliente > '2000-01-01' AND
   d_nasc_cliente < '2010-01-01' ;

SELECT * FROM cliente WHERE d_nasc_cliente IN
   (SELECT 
      d_nasc_cliente 
   FROM cliente WHERE 
      d_nasc_cliente > '2000-01-01' AND
      d_nasc_cliente < '2010-01-01');
