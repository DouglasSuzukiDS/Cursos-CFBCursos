CREATE TABLE contato(
	n_contato_contato_id INT PRIMARY KEY AUTO_INCREMENT,
    s_nome_contato VARCHAR(255) NOT NULL,
    s_celular_contato VARCHAR(255),
    s_email_contato VARCHAR(255),
    dt_dtnasc_contato DATE
);

INSERT INTO contato 
	(s_nome_contato, s_celular_contato, s_email_contato, dt_dtnasc_contato) 
    VALUES ('Batman', '11111111111', 'batman@email.com', '2000-04-01');
    
INSERT INTO contato 
	(s_nome_contato, s_celular_contato, s_email_contato, dt_dtnasc_contato) 
    VALUES ('Sonic', '11222222222', 'sonic@email.com', '2000-10-01');