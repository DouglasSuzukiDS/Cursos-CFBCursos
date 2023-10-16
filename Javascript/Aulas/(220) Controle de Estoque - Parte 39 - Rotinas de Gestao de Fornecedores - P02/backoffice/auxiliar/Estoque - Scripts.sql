CREATE DATABASE Estoque;

ALTER TABLE tipopessoa RENAME COLUMN n_tipoPessoa_tipoPessoa TO n_tipopessoa_tipopessoa;
ALTER TABLE tipopessoa RENAME COLUMN n_nivel_tipoPessoa TO n_nivel_tipopessoa;
ALTER TABLE tipopessoa RENAME COLUMN s_desc_tipoPessoa TO s_desc_tipopessoa;

ALTER TABLE pessoa RENAME COLUMN n_tipoPessoa TO n_tipopessoa_tipopessoa;
ALTER TABLE pessoa MODIFY COLUMN s_foto_pessoa MEDIUMTEXT;
ALTER TABLE usuario ADD COLUMN s_foto_usuario MEDIUMTEXT;

INSERT INTO tipoPessoa (s_desc_tipoPessoa, n_nivel_tipoPessoa) VALUES 
	('Colaborador', 1);

INSERT INTO tipoPessoa (s_desc_tipoPessoa, n_nivel_tipoPessoa) VALUES 
	('Contato Fornecedor', 0);
    
INSERT INTO tipoPessoa (s_desc_tipoPessoa, n_nivel_tipoPessoa) VALUES 
	('Administrador', 10);

INSERT INTO usuario (s_nome_usuario, n_tipoUsuario_tipoUsuario, c_status_usuario) VALUES
	('Shanks', 1, 'A');

SELECT * FROM tipoPessoa;
SELECT * FROM telefone;
SELECT * FROM pessoa;
UPDATE usuario SET c_status_usuario = 'A' WHERE n_usuario_usuario = 1;
DELETE FROM usuario WHERE s_nome_usuario = 'Teste';
DELETE FROM usuario WHERE n_usuario_usuario != 1;
SET FOREIGN_KEY_CHECKS=ON; /* Para poder apagar o usuário */
ALTER TABLE usuario AUTO_INCREMENT = 2;