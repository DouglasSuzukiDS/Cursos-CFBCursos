CREATE TABLE `usuario` (
  `n_usuario_usuario` int PRIMARY KEY AUTO_INCREMENT,
  `s_nome_usuario` varchar(255),
  `n_tipoUsuario_tipoUsuario` int,
  `c_status_usuario` char
);

CREATE TABLE `telefone` (
  `n_telefone_telefone` int PRIMARY KEY AUTO_INCREMENT,
  `n_usuario_usuario` int,
  `s_ddd_telefone` varchar(255),
  `s_numero_telefone` varchar(255)
);

CREATE TABLE `tipoUsuario` (
  `n_tipoUsuario_tipoUsuario` int PRIMARY KEY AUTO_INCREMENT,
  `s_desc_tipoUsuario` varchar(255),
  `c_nivel_tipoUsuario` char
);

ALTER TABLE `usuario` ADD FOREIGN KEY (`n_tipoUsuario_tipoUsuario`) REFERENCES `tipoUsuario` (`n_tipoUsuario_tipoUsuario`);

ALTER TABLE `telefone` ADD FOREIGN KEY (`n_usuario_usuario`) REFERENCES `usuario` (`n_usuario_usuario`);

DROP TABLE telefone;
DROP TABLE tipousuario;
DROP TABLE usuario;