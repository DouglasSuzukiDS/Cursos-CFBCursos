-- Funções round, count, sum e avg - Curso de SQL - Aula 27

-- SUM => Soma
-- AVG => Média
-- COUNT => Contagem
-- Round(campo para somar, casas decimais) => Arredondar

SELECT SUM(f_valor_venda) FROM venda;

SELECT ROUND(SUM(f_valor_venda), 2) FROM venda;

SELECT ROUND(SUM(f_valor_venda), 2) FROM venda WHERE d_data_venda > '2020-05-01';

SELECT MIN(f_valor_venda) FROM venda;
SELECT MAX(f_valor_venda) FROM venda;
SELECT ROUND(AVG(f_valor_venda), 2) FROM venda;

SELECT ROUND(AVG(f_valor_venda), 2) FROM venda
WHERE f_valor_venda > (SELECT MIN(f_valor_venda) FROM venda) AND
f_valor_venda < (SELECT MAX(f_valor_venda) FROM venda);

SELECT COUNT(f_valor_venda) AS 'Qtde Vendas',
ROUND(AVG(f_valor_venda), 2) AS 'Valor médio das vendas' FROM venda
WHERE f_valor_venda > (SELECT MIN(f_valor_venda) FROM venda) AND
f_valor_venda < (SELECT MAX(f_valor_venda) FROM venda);

