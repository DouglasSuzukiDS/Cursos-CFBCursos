-- Como usar as funções IFNULL, ISNULL e NVL - Curso de SQL - Aula 36

# MySQK => IFNULL ou COALESCE
# SQLServer => ISNULL
# Oracle => NVL

UPDATE produtovenda SET i_qtde_produtovenda = NULL WHERE i_produtovenda_produtovenda = 1;

SELECT 
   *, 
   ROUND((f_prEcoun_produtovenda * i_qtde_produtovenda), 2) as 'Total'
FROM produtovenda;


SELECT 
   *, 
   ROUND(
      (f_prEcoun_produtovenda * 
         IFNULL(i_qtde_produtovenda, 0)
      ) 
   , 2) as 'Total'
FROM produtovenda;