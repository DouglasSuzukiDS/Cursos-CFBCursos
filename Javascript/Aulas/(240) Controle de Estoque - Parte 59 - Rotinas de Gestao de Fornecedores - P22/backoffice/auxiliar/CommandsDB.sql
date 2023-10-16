SELECT * FROM fornecedor;

UPDATE fornecedor SET s_desc_fornecedor = 'Fornecedor', c_status_fornecedor = 'I', 
	s_logo_fornecedor = '' WHERE n_fornecedor_fornecedor = 3;
    
CREATE TABLE `contatoFornecedor` (
  `n_contatoFornecedor_contatoFornecedor` int PRIMARY KEY AUTO_INCREMENT,
  `n_fornecedor_fornecedor` int,
  `n_pessoa_pessoa` int
);

ALTER TABLE `contatoFornecedor` 
	ADD FOREIGN KEY (`n_fornecedor_fornecedor`) 
    REFERENCES `fornecedor` (`n_fornecedor_fornecedor`);

ALTER TABLE `contatoFornecedor` 
	ADD FOREIGN KEY (`n_pessoa_pessoa`) 
    REFERENCES `pessoa` (`n_pessoa_pessoa`);

SELECT * FROM contatoFornecedor;
DELETE FROM fornecedor WHERE n_fornecedor_fornecedor = 4;
ALTER TABLE fornecedor AUTO_INCREMENT = 4;

CREATE TABLE `produto` (
  `n_cod_produto` int PRIMARY KEY,
  `n_tipoProduto_tipoProduto` int,
  `s_desc_produto` varchar(255),
  `n_fornecedor_fornecedor` int,
  `n_qtde_produto` int,
  `c_status_produto` char
);

CREATE TABLE `tipoproduto` (
  `n_tipoproduto_tipoproduto` int PRIMARY KEY AUTO_INCREMENT,
  `s_desc_tipoproduto` varchar(255)
);
ALTER TABLE tipoproduto RENAME COLUMN s_dec_tipoproduto TO s_desc_tipoproduto;
INSERT INTO tipoproduto (s_desc_tipoproduto) VALUE ('Eletônicos');
INSERT INTO tipoproduto (s_desc_tipoproduto) VALUE ('Alimentação');
INSERT INTO tipoproduto (s_desc_tipoproduto) VALUE ('Vestuário');
SELECT * FROM tipoproduto;

CREATE TABLE `movimentacao` (
  `n_movimentacao_movimentacao` int PRIMARY KEY AUTO_INCREMENT,
  `n_pessoa_pessoa` int,
  `c_tipo_movimentacao` char,
  `n_qtde_movimentacao` int,
  `dt_datahora_movimentacao` datetime
);

ALTER TABLE `produto` ADD FOREIGN KEY (`n_tipoProduto_tipoProduto`) REFERENCES `tipoproduto` (`n_tipoproduto_tipoproduto`);

ALTER TABLE `produto` ADD FOREIGN KEY (`n_fornecedor_fornecedor`) REFERENCES `fornecedor` (`n_fornecedor_fornecedor`);

ALTER TABLE `movimentacao` ADD FOREIGN KEY (`n_pessoa_pessoa`) REFERENCES `pessoa` (`n_pessoa_pessoa`);