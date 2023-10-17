-- Criando e usando View em SQL - Curso de SQL - Aula 17

-- VIEW => Tabela virtual para visualizar dados
CREATE VIEW cpfCliente AS
   SELECT i_cliente_cliente, s_cpf_cliente
FROM cliente;

SELECT * FROM cpfCliente;

CREATE VIEW niverMesAtual as
SELECT
   i_cliente_cliente,
   s_nome_cliente,
   DAY(d_nasc_cliente) AS 'Dia Aniversario'
FROM cliente
WHERE MONTH(d_nasc_cliente) = MONTH(CURDATE()); -- Mes atual
-- WHERE MONTH(d_nasc_cliente) = 12 -- Mes 12;
-- WHERE MONTH(d_nasc_cliente) IN (7, 9, 12);
SELECT * FROM cliente;