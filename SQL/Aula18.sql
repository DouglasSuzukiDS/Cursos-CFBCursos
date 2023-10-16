SELECT * FROM cliente WHERE 
   s_cpf_cliente = '00000000000' OR
   s_cpf_cliente = '00000000002';

SELECT * FROM cliente WHERE 
   -- i_tipo_cliente = 1 AND
   i_tipo_cliente IN(2, 3) AND
   MONTH(d_nasc_cliente) > 4 AND
   MONTH(d_nasc_cliente) <= 9; 