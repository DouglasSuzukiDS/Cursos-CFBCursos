-- SQL Injection - Curso de SQL - Aula 41
/* -- Comando SQL
   ALTER TABLE cliente ADD COLUMN s_usr_cliente VARCHAR(20);
   ALTER TABLE cliente ADD COLUMN s_senha_cliente VARCHAR(20);

   UPDATE cliente SET s_usr_cliente='brn',s_senha_cliente='123' WHERE i_cliente_cliente=1;
   UPDATE cliente SET s_usr_cliente='astro',s_senha_cliente='123' WHERE i_cliente_cliente=2;
   UPDATE cliente SET s_usr_cliente='bene',s_senha_cliente='123' WHERE i_cliente_cliente=3;
   UPDATE cliente SET s_usr_cliente='clov',s_senha_cliente='123' WHERE i_cliente_cliente=4;
   UPDATE cliente SET s_usr_cliente='maris',s_senha_cliente='123' WHERE i_cliente_cliente=5;
   UPDATE cliente SET s_usr_cliente='xing',s_senha_cliente='123' WHERE i_cliente_cliente=6;
   UPDATE cliente SET s_usr_cliente='tra',s_senha_cliente='123' WHERE i_cliente_cliente=7;
   UPDATE cliente SET s_usr_cliente='arqui',s_senha_cliente='123' WHERE i_cliente_cliente=8;
   UPDATE cliente SET s_usr_cliente='clare',s_senha_cliente='123' WHERE i_cliente_cliente=9;
   UPDATE cliente SET s_usr_cliente='nel',s_senha_cliente='123' WHERE i_cliente_cliente=10;
   UPDATE cliente SET s_usr_cliente='bartol',s_senha_cliente='123' WHERE i_cliente_cliente=11;
   UPDATE cliente SET s_usr_cliente='blest',s_senha_cliente='123' WHERE i_cliente_cliente=12;
   UPDATE cliente SET s_usr_cliente='ves',s_senha_cliente='123' WHERE i_cliente_cliente=13;
   UPDATE cliente SET s_usr_cliente='prast',s_senha_cliente='123' WHERE i_cliente_cliente=14;
   UPDATE cliente SET s_usr_cliente='valk',s_senha_cliente='123' WHERE i_cliente_cliente=15;
   UPDATE cliente SET s_usr_cliente='alci',s_senha_cliente='123' WHERE i_cliente_cliente=16;
   UPDATE cliente SET s_usr_cliente='nest',s_senha_cliente='123' WHERE i_cliente_cliente=17;
   UPDATE cliente SET s_usr_cliente='mord',s_senha_cliente='123' WHERE i_cliente_cliente=18;
   UPDATE cliente SET s_usr_cliente='mordo',s_senha_cliente='123' WHERE i_cliente_cliente=19;
   UPDATE cliente SET s_usr_cliente='salo',s_senha_cliente='123' WHERE i_cliente_cliente=20;
   UPDATE cliente SET s_usr_cliente='crisb',s_senha_cliente='123' WHERE i_cliente_cliente=21;
   UPDATE cliente SET s_usr_cliente='malg',s_senha_cliente='123' WHERE i_cliente_cliente=22;
   UPDATE cliente SET s_usr_cliente='silm',s_senha_cliente='123' WHERE i_cliente_cliente=23;
   UPDATE cliente SET s_usr_cliente='floras',s_senha_cliente='123' WHERE i_cliente_cliente=24;
*/

-- Analise
   # userName => '' OR '''' = ''''
   # senha => '' OR '''' = ''''

   SELECT * FROM cliente WHERE s_usr_cliente = 'aaa' OR '''' = '''' AND s_senha_cliente = '000' OR '''' = '''';
   SELECT * FROM cliente WHERE s_usr_cliente = '' OR '''' = '''' AND s_senha_cliente = '' OR '''' = '''';

   ----------------

   # userName => 1
   # senha => 1; DROP TABLE cliente;

   SELECT * FROM cliente WHERE s_usr_cliente = '1' AND s_senha_cliente = '1'; DROP TABLE cliente;

   # A solução é usar parâmetros de entrada

   SET @nome = 'Nick';
   SELECT * FROM cliente WHERE s_nome_cliente = @nome;


SELECT * FROM cliente;