-- Conheça algumas funções de SQL - Curso de SQL - Aula 42

# LOCATE => Pesquisa um conteúdo X em uma string e retorna a posição
SELECT s_nome_cliente FROM cliente WHERE i_cliente_cliente = 1;
SELECT LOCATE('i', s_nome_cliente), s_nome_cliente FROM cliente WHERE i_cliente_cliente = 1;

# UPPER => COnverte a string para maiúsculo
SELECT UPPER(s_nome_cliente) FROM cliente WHERE i_cliente_cliente = 1;

# LOWER => Converte a string para minúsculo
SELECT LOWER(s_nome_cliente) FROM cliente WHERE i_cliente_cliente = 1;

# SUBSTR => Extrai parte de uma string (str, posINI, qtde)
SELECT SUBSTR(s_nome_cliente, 2, 3) FROM cliente WHERE i_cliente_cliente = 1;

# CONCAT => Concatena duas strings
SELECT CONCAT('Nome: ', s_nome_cliente) FROM cliente WHERE i_cliente_cliente = 1;

# FORMAT => Formara um numeral para  o padrão #, ###, ###.##
# Com a quantidade de casas decimais informada
SELECT *, FORMAT(f_valor_venda, 2) FROM venda;

# ASCII => Retorna o valor ASCII do primeiro caractere da STRING
SELECT ASCII(s_nome_cliente) FROM cliente WHERE i_cliente_cliente = 1;

# CHAR_LENGHT => Retorna o tamanho da STRING
SELECT CHAR_LENGTH(s_nome_cliente) FROM cliente WHERE i_cliente_cliente = 1;