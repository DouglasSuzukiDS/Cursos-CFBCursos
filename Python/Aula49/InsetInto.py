import sqlite3
from sqlite3 import Error

########## Criar Conexão
def ConexaoBanco():
    caminho = "C:\\Users\\Krzysztof\\Documents\\Python\\Aula49\\banco\\agenda.db"
    con = None
    try:
        con = sqlite3.connect(caminho) #Conecta o Banco de Dados 
    except Error as ex:
        print(ex) #Se der erro na conexão, ele mostra o erro
    return con
vcon = ConexaoBanco() #Recebe a Conexao

nome = input("Digite o nome: ")
telefone = input("Digite o telefone: ")
email = input("Digite o email: ")

#vsql = """  INSERT INTO tb_contatos  #Inserção Manual
#           (T_NOMECONTATO, T_TELEFONECONTATO, T_EMAILCONTATO)
#       VALUES('teste_nome', 'teste_telefone', 'teste_email')"""

vsql = "  INSERT INTO tb_contatos (T_NOMECONTATO, T_TELEFONECONTATO, T_EMAILCONTATO) VALUES('"+nome+"', '" +telefone+ "', '" +email+ "') "
def inserir(conexao, sql):
    try:
        c = conexao.cursor()
        c.execute(sql)
        conexao.commit() #Comita, e faz o registro dos dados
        print("Registro inserido")
    except Error as ex:
        print(ex)

inserir(vcon, vsql)