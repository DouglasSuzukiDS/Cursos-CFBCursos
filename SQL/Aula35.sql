-- Você precisa aprender sobre CASE..WHEN - Curso de SQL - Aula 35
SELECT 
   i_cliente_cliente,
   s_nome_cliente,
   s_cpf_cliente,
   CASE 
      -- Se o campo estiver com a consição NULL ele mostrará a data de hoje
         -- Condição para verificar
      WHEN d_nasc_cliente IS NULL THEN now()
      -- Se for diferente de NULL ele retornara seu valor msm
      ELSE d_nasc_cliente
   END 'd_nasc_cliente',
   i_tipo_cliente,
   CASE 
      WHEN (DATEDIFF(NOW(), d_nasc_cliente) / 365) > 18 THEN 'Maior'  
      ELSE  'Menor'
   END 'Situação'
FROM cliente;