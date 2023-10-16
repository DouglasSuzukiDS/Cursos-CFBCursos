import re 
import os

#r - read -> Leitura
#a - append -> Anexar, adiciona novo conteudo
#w - write -> Escrita
#x - create -> Criar arquivo, retorna erro se o arquivo existir
#t - texto
#b - binário

nome = "teste.txt"
caminho = "C:/Users/Krzysztof/Documents/Python/Aula46/"

if os.path.exists(caminho + nome): #Se o arquivo existir
    print("Arquivo existente")
else:
    f = open(caminho + nome, "x")
    f.close()
    print("Arquivo criado")

if os.path.exists(caminho + nome): #Se o arquivo existir
    os.remove(caminho + nome) #Remove o arquivo
    print("Arquivo removido")
else:
    print("Arquivo inexistente")
