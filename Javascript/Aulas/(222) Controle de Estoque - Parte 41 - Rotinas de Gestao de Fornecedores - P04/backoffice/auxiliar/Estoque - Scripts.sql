CREATE DATABASE Estoque;

ALTER TABLE tipousuario RENAME COLUMN n_tipousuario_tipousuario TO n_tipousuario_tipousuario;
ALTER TABLE tipousuario RENAME COLUMN n_nivel_tipousuario TO n_nivel_tipousuario;
ALTER TABLE tipousuario RENAME COLUMN s_desc_tipousuario TO s_desc_tipousuario;

ALTER TABLE usuario RENAME COLUMN n_tipousuario TO n_tipousuario_tipousuario;
ALTER TABLE usuario MODIFY COLUMN s_foto_usuario MEDIUMTEXT;
ALTER TABLE usuario ADD COLUMN s_foto_usuario MEDIUMTEXT;

INSERT INTO tipousuario (s_desc_tipousuario, n_nivel_tipousuario) VALUES 
	('Colaborador', 1);

INSERT INTO tipousuario (s_desc_tipousuario, n_nivel_tipousuario) VALUES 
	('Contato Fornecedor', 0);
    
INSERT INTO tipousuario (s_desc_tipousuario, n_nivel_tipousuario) VALUES 
	('Administrador', 10);

INSERT INTO usuario (s_nome_usuario, n_tipoUsuario_tipoUsuario, c_status_usuario) VALUES
	('Shanks', 1, 'A');

ALTER TABLE fornecedor RENAME COLUMN n_status_fornecedor TO c_status_fornecedor;
ALTER TABLE fornecedor MODIFY COLUMN c_status_fornecedor CHAR;
ALTER TABLE fornecedor ADD COLUMN s_logo_fornecedor MEDIUMTEXT;
INSERT INTO fornecedor (s_desc_fornecedor, c_status_fornecedor) VALUES 
	('Fornecedor 01', 'A');

INSERT INTO fornecedor (s_desc_fornecedor, c_status_fornecedor) VALUES 
	('Fornecedor 02', 'A');

SELECT * FROM fornecedor;
SELECT * FROM pessoa;
SELECT * FROM telefone;
SELECT * FROM tipopessoa;
SELECT * FROM tipousuario;
SELECT * FROM usuario;
UPDATE usuario SET c_status_usuario = 'A' WHERE n_usuario_usuario = 1;
DELETE FROM usuario WHERE s_nome_usuario = 'Teste';
DELETE FROM usuario WHERE n_usuario_usuario != 1;
SET FOREIGN_KEY_CHECKS=ON; /* Para poder apagar o usuário */
ALTER TABLE usuario AUTO_INCREMENT = 2;