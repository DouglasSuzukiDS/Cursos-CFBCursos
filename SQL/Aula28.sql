-- Operador LIKE - Curso de SQL - Aula 28
-- % => Qualquer caracter
-- _ => Quantidade de caracteres apartir do ponto
SELECT * FROM cliente
-- WHERE s_nome_cliente LIKE ('s%'); -- Começa com S
-- WHERE s_nome_cliente LIKE ('%s'); -- Termina com S
-- WHERE s_nome_cliente LIKE ('j%s'); -- Começa com J e termina com S
WHERE s_nome_cliente LIKE ('_____'); -- Resultado com 5 caracteres
