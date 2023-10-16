import sqlite3
from sqlite3 import Error

########## Criar Conexão
def ConexaoBanco():
    caminho = "C:\\Users\\Krzysztof\\Documents\\Python\\Aula51\\banco\\agenda.db"
    con = None
    try:
        con = sqlite3.connect(caminho) #Conecta o Banco de Dados 
    except Error as ex:
        print(ex) #Se der erro na conexão, ele mostra o erro
    return con
vcon = ConexaoBanco() #Recebe a Conexao

#Inserir
def inserir(conexao, sql):
    try:
        c = conexao.cursor()
        c.execute(sql)
        conexao.commit() #Comita, e faz o registro dos dados
        print("Registro inserido")
    except Error as ex:
        print(ex)

#nome = input("Digite o nome: ")
#telefone = input("Digite o telefone: ")
#email = input("Digite o email: ")
#vsql = "  INSERT INTO tb_contatos (T_NOMECONTATO, T_TELEFONECONTATO, T_EMAILCONTATO) VALUES('"+nome+"', '" +telefone+ "', '" +email+ "') "
#inserir(vcon, vsql)

#Deletar
def deletar(conexao, sql):
    try:
        c = conexao.cursor()
        c.execute(sql)
        conexao.commit() #Comita, e faz o registro dos dados
    except Error as ex:
        print(ex)
    finally:
        print("Registro removido")

vsql = "DELETE FROM tb_contatos WHERE N_IDCONTATO = 2"
#deletar(vcon, vsql)

def atualizar(conexao, sql):
    try:
        c = conexao.cursor()
        c.execute(sql)
        conexao.commit() #Comita, e faz o registro dos dados
    except Error as ex:
        print(ex)
    finally:
        print("Registro atualizado")

#vsql = "UPDATE tb_contatos SET T_NOMECONTATO = 'Marco', T_TELEFONECONTATO = '(31)99999-9999', T_EMAILCONTATO = 'marco@teste.com' WHERE N_IDCONTATO = 1"
vsql = "UPDATE tb_contatos SET T_NOMECONTATO = 'Blestornildo', T_TELEFONECONTATO = '(31)91234-5678', T_EMAILCONTATO = 'bles@email.com.br' WHERE N_IDCONTATO = 3"

atualizar(vcon, vsql)
