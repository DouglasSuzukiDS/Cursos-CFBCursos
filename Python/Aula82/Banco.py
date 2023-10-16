import sqlite3
from sqlite3 import Error
import os

pastaApp = os.path.dirname(__file__)
nomeBanco = pastaApp + "\\contatos.db"

def ConexaoBanco():
    con = None
    try:
        con = sqlite3.connect(nomeBanco)
    except Error as ex:
        print(ex)
    return con

def dql(query): #Select
    vcon = ConexaoBanco()
    c = vcon.cursor()
    c.execute(query)
    res = c.fetchall() #Retorna todos os resultados
    vcon.close()
    return res

def dml(query): #Insert, Update, Delete
    try:
        vcon = ConexaoBanco()
        c = vcon.cursor()
        c.execute(query)
        vcon.commit() #Confirma os Dados
        vcon.close()
    except Error as ex:
        print(ex)