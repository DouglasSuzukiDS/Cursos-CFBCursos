import re 

nome = "teste.txt"
f = open("C:/Users/Krzysztof/Documents/Python/Aula45/" + nome, "rt")
#r - read -> Leitura
#a - append -> Anexar, adiciona novo conteudo
#w - write -> Escrita
#x - create -> Criar arquivo, retorna erro se o arquivo existir
#t - texto
#b - binário

#print(f.read()) #Le o conteudo completo
#print(f.read(NUM)) #Le o número de caracteres selecionado
#print(f.readline()) #Lê a linha completa, em string

'''for l in f:  #Le o comteudo completo
    print(l)'''

res =  re.sub("\s", "-", f.readline())
f.close()

f = open("C:/Users/Krzysztof/Documents/Python/Aula45/" + nome, "wt")
f.write(res)
f.close()

print(res) 
    