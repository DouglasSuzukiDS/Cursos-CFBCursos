-- Como usar o Operador BETWEEN - Curso de SQL - Aula 30
SELECT * FROM cliente
WHERE I_tipo_cliente IN (1, 2, 3); -- Nesta faixa

SELECT * FROM cliente
WHERE I_tipo_cliente BETWEEN 1 AND 10; -- Entre esta faixa

SELECT * FROM cliente
WHERE d_nasc_cliente BETWEEN '2000-01-01' AND '2010-01-01';

SELECT * FROM venda
WHERE d_data_venda BETWEEN '2020-07-01' AND '2020-11-01';

SELECT * FROM venda
WHERE 
   (d_data_venda BETWEEN '2020-07-01' AND '2020-11-01')
   AND i_cliente_cliente NOT IN (3, 10)
   AND f_valor_venda > 20;