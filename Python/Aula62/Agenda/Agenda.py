import os
import sqlite3
from sqlite3 import Error

## Conexão
def ConexaoBanco():
    caminho = "C:\\Users\\Krzysztof\\Documents\\Python\\Aula56\\banco\\agenda.db"
    con = None
    try:
        con = sqlite3.connect(caminho)
    except Error as ex:
        print(ex)
    return con

vcon = ConexaoBanco()

def query(conexao, sql): #Insert, Delete, Update
    try:
        c = conexao.cursor() #Poder executa a query
        c.execute(sql)
        conexao.commit() #Persistencia 
    except Error as ex:
        print(ex)
    finally:
        print("Operacao Realizada com Sucesso")
        #conexao.close()

def consultar(conexao, sql): #Select
    c = conexao.cursor() #Poder executa a query
    c.execute(sql)
    res = c.fetchall() #Todas os resultados encontrados
    #conexao.close()
    return res

def menuPrincipal():
    os.system("cls")
    print("1 - Inserir Novo Registro")
    print("2 - Deletar Registro")
    print("3 - Atualizar Registro")
    print("4 - Consultar Registros")
    print("5 - Consultar Registro por Nome")
    print("6 - Sair")

def menuInserir():
    os.system("cls")
    vnome = input("Digite o nome: ")
    vtelefone = input("Digite o telefone: ")
    vemail = input("Digite o email: ")
    vsql = "INSERT INTO tb_contatos (T_NOMECONTATO, T_TELEFONECONTATO, T_EMAILCONTATO) VALUES ('"+vnome+"', '"+vtelefone+"', '"+vemail+"')"
    query(vcon, vsql)

def menuDeletar():
    os.system("cls")
    vid = input("Digite o ID do Registro a ser Deletado: ")
    vsql = "DELETE FROM tb_contatos WHERE N_IDCONTATO = " + vid
    query(vcon, vsql)

def menuAtualizar():
    os.system("cls")
    vid = input("Digite o ID do Registro a ser Alterado: ")
    r = consultar(vcon, "SELECT * FROM tb_contatos WHERE N_IDCONTATO = " + vid)
    rnome = r[0][1]
    rtelefone = r[0][2]
    remail = r[0][3]
    vnome = input("Digite o nome: ")
    vtelefone = input("Digite o telefone: ")
    vemail = input("Digite o email: ")
    if(len(vnome) == 0):
        vnome = rnome
    if(len(vtelefone) == 0):
        vtelefone = rtelefone
    if(len(vemail) == 0):
        vemail = remail
    vsql = "UPDATE tb_contatos SET T_NOMECONTATO = '"+vnome+"', T_TELEFONECONTATO = '"+vtelefone+"', T_EMAILCONTATO = '"+vemail+"' WHERE N_IDCONTATO = " + vid
    query(vcon, vsql)
     
def menuConsultar():
    vsql = "SELECT * FROM tb_contatos"
    res = consultar(vcon, vsql)
    vlim = 10
    vcont = 0
    for r in res:
        print("ID: {0:_<3} Nome: {1:_<30} Telefone: {2:_<14} Email: {3:_<30}".format(r[0], r[1], r[2], r[3])) #Começa a ser preenchido na esquerda, e preenche o restando dos espaços com underline
        vcont += 1
        if(vcont >= vlim):
            vcont = 0
            os.system("pause")
            os.system("cls")
    print("Fim da Lista")
    os.system("pause")

def menuConsultarNomes():
    vnome = input("Digite o Nome: ")
    vsql = "SELECT * FROM tb_contatos WHERE T_NOMECONTATO LIKE '%"+vnome+"%'" #Retorna os contatos que tenha semelhança com o que foi digitado
    res = consultar(vcon, vsql)
    vlim = 10
    vcont = 0
    for r in res:
        print("ID: {0:_<3} Nome: {1:_<30} Telefone: {2:_<14} Email: {3:_<30}".format(r[0], r[1], r[2], r[3])) #Começa a ser preenchido na esquerda, e preenche o restando dos espaços com underline
        vcont += 1
        if(vcont >= vlim):
            vcont = 0
            os.system("pause")
            os.system("cls")
    print("Fim da Lista")
    os.system("pause")

opc = 0
while opc != 6:
    menuPrincipal()
    opc = int(input("Digite uma opcao: "))
    if opc == 1:
        menuInserir()
    elif opc == 2:
        menuDeletar()
    elif opc == 3:
        menuAtualizar()
    elif opc == 4:
        menuConsultar()
    elif opc == 5:
        menuConsultarNomes()
    elif opc == 6:
        os.system("cls")
        print("Programa Finalizado")
    else:
        os.system("cls")
        print("opcao invalida")
        os.system("pause")

vcon.close()
os.system("pause")


    