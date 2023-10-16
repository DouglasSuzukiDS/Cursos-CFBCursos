USE cfbcursos;

CREATE TABLE produtos(
	n_id_produto INT PRIMARY KEY AUTO_INCREMENT,
    s_nome_produto VARCHAR(255),
    s_marca_produto VARCHAR(255),
    s_modelo_produto VARCHAR(255)
);

ALTER TABLE produtos AUTO_INCREMENT = 1;

INSERT INTO produtos (n_id_produto, s_nome_produto, s_marca_produto, s_modelo_produto) VALUES (
	null, "Processador", "Intel","i7"
);

INSERT INTO produtos (n_id_produto, s_nome_produto, s_marca_produto, s_modelo_produto) VALUES (
	null, "Mouse", "Logitec","M90"
);

INSERT INTO produtos (n_id_produto, s_nome_produto, s_marca_produto, s_modelo_produto) VALUES (
	null, "Monitor", "Samsung","Syncmarc"
);

INSERT INTO produtos (n_id_produto, s_nome_produto, s_marca_produto, s_modelo_produto) VALUES (
	null, "Impressora", "HP","P1005"
);

INSERT INTO produtos (n_id_produto, s_nome_produto, s_marca_produto, s_modelo_produto) VALUES (
	null, "Drone", "DJI","Mini 3"
);

SELECT * FROM produtos;