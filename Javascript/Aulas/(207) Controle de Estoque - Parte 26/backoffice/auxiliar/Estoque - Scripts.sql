CREATE DATABASE Estoque;

ALTER TABLE tipousuario RENAME COLUMN m_nivel_tipoUsuario TO n_nivel_tipoUsuario;

ALTER TABLE usuario ADD COLUMN s_foto_usuario MEDIUMTEXT;

INSERT INTO tipousuario (s_desc_tipoUsuario, n_nivel_tipoUsuario) VALUES 
	('Super Usuário', 10);
    
INSERT INTO tipousuario (s_desc_tipoUsuario, n_nivel_tipoUsuario) VALUES 
	('Administrador', 5);
    
INSERT INTO tipousuario (s_desc_tipoUsuario, n_nivel_tipoUsuario) VALUES 
	('Colaborador', 1);

INSERT INTO usuario (s_nome_usuario, n_tipoUsuario_tipoUsuario, c_status_usuario) VALUES
	('Shanks', 1, 'A');

SELECT * FROM tipousuario;
SELECT * FROM telefone;
SELECT * FROM usuario;
DELETE FROM usuario WHERE s_nome_usuario = 'Teste';
DELETE FROM usuario WHERE n_usuario_usuario != 1;
SET FOREIGN_KEY_CHECKS=ON; /* Para poder apagar o usuário */
ALTER TABLE usuario AUTO_INCREMENT = 2;