-- Having, filtrando registros agrupados - Curso de SQL - Aula 21

SELECT 
   v.d_data_venda,
   COUNT(v.i_venda_venda) AS 'Qtde vendas do Dia'
FROM venda v 
GROUP BY v.d_data_venda
HAVING d_data_venda > '2020-10-01';

SELECT 
   v.d_data_venda,
   COUNT(v.i_venda_venda) AS 'Qtde vendas do Dia'
FROM venda v 
GROUP BY v.d_data_venda
HAVING COUNT(v.i_venda_venda) >= 2;
