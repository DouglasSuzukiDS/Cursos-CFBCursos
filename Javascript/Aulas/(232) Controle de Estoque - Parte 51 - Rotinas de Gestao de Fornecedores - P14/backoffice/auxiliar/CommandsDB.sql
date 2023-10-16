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