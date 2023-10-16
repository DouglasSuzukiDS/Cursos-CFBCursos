CREATE TABLE contato(
	n_contato_contato_id INT PRIMARY KEY AUTO_INCREMENT,
    s_nome_contato VARCHAR(255) NOT NULL,
    s_celular_contato VARCHAR(255),
    s_email_contato VARCHAR(255),
    dt_dtnasc_contato DATE
);
ALTER TABLE contato AUTO_INCREMENT = 1;
SELECT * FROM contato;
ALTER TABLE contato MODIFY COLUMN dt_dtnasc_contato VARCHAR(255);
UPDATE contato SET 
	s_nome_contato='${nome}', 
	s_celular_contato='${celular}', 
	s_email_contato='${email}', 
	dt_dtnasc_contato='${nasc}'
WHERE n_contato_contato_id='${id}'
/*
INSERT INTO contato 
	(s_nome_contato, s_celular_contato, s_email_contato, dt_dtnasc_contato) 
    VALUES ('Batman', '11111111111', 'batman@email.com', '2000-04-01');
    
INSERT INTO contato 
	(s_nome_contato, s_celular_contato, s_email_contato, dt_dtnasc_contato) 
    VALUES ('Sonic', '11222222222', 'sonic@email.com', '2000-10-01');
    
INSERT INTO contato 
	(s_nome_contato, s_celular_contato, s_email_contato, dt_dtnasc_contato) 
    VALUES ('Shanks', '333333333333', 'shanks@email.com', '2000-05-03');
    
INSERT INTO contato 
	(s_nome_contato, s_celular_contato, s_email_contato, dt_dtnasc_contato) 
    VALUES ('Test', '44444444444', 'test@email.com', '2000-05-05');
    
INSERT INTO contato 
	(s_nome_contato, s_celular_contato, s_email_contato, dt_dtnasc_contato) 
    VALUES ('Test2', '55555555555', 'test2@email.com', '2000-08-05');
*/