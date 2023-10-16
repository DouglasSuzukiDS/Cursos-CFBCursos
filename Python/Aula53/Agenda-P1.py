import os
import sqlite3
from sqlite3 import Error

## Conexão
def ConexaoBanco():
    caminho = "C:\\Users\\Krzysztof\\Documents\\Python\\Aula53\\banco\\agenda.db"
    con = None
    try:
        con = sqlite3.connect(caminho)
    except Error as ex:
        print(ex)
    return con

vcon = ConexaoBanco()

def menuPrincipal():
    os.system("cls")
    print("1 - Inserir Novo Registro")
    print("2 - Deletar Registro")
    print("3 - Inserir Novo Registro")
    print("4 - Consultar Registro por ID")
    print("5 - Consultar Registro por Nome")
    print("6 - Sair")

def menuInserir():
     print()

def menuDeletar():
     print()

def menuAtualizar():
     print()
     
def menuConsultarId():
    print()

def menuConsultarNomes():
    print()

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
        menuConsultarId()
    elif opc == 5:
        menuConsultarNomes()
    elif opc == 6:
        os.system("cls")
        print("Programa Finalizado")
    else:
        os.system("cls")
        print("opcao invalida")
        os.system("pause")

os.system("pause")


    