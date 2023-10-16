import sqlite3
from sqlite3 import Error

########## Criar Conexão
def ConexaoBanco():
    caminho = "C:\\Users\\Krzysztof\\Documents\\Python\\Aula48\\banco\\agenda.db"
    con = None
    try:
        con = sqlite3.connect(caminho) #Conecta o Banco de Dados 
    except Error as ex:
        print(ex) #Se der erro na conexão, ele mostra o erro
    return con

vcon = ConexaoBanco() #Recebe a Conexao

########## Criar Tabela
vsql = """ CREATE TABLE tb_contatos(
                N_IDCONTATO INTEGER PRIMARY KEY AUTOINCREMENT,
                T_NOMECONTATO VARCHAR(30),
                T_TELEFONECONTATO VARCHAR(14),
                T_EMAILCONTATO VARCHAR(30)
           ); """
def criarTabela(conexao, sql):
    try:
        c = conexao.cursor()
        c.execute(sql)
        print("Tabela Criada")
    except Error as ex:
        print(ex)

criarTabela(vcon, vsql) #Conexao e a Tabela

vcon.close() #Encerra a Conexão
