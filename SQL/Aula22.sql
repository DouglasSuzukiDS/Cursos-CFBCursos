-- Order By, ordenando os registros - Curso de SQL - Aula 22

SELECT * FROM cliente ORDER BY s_nome_cliente;

SELECT * FROM cliente ORDER BY i_tipo_cliente;

SELECT * FROM cliente ORDER BY i_tipo_cliente, s_nome_cliente;

SELECT * FROM cliente ORDER BY 5; -- Ordenação pela posiçao da coluna

SELECT * FROM cliente ORDER BY 5, 2 DESC; -- DESC => Maior para o menor
SELECT * FROM cliente ORDER BY 5 DESC, 2 ASC; -- ASC => Menor para o maior

SELECT * FROM cliente 
   ORDER BY
   -- LEFT(s_cpf_cliente, 3); -- Ordena pelos 3 primeiros numeros
   RIGHT(s_cpf_cliente, 3); -- Ordena pelos 3 ultimos numeros

