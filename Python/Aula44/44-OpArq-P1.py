nome = "teste.txt"
f = open("C:/Users/Krzysztof/Documents/Python/Aula44/" + nome, "at")
#r - read -> Leitura
#a - append -> Anexar, adiciona novo conteudo
#w - write -> Escrita
#x - create -> Criar arquivo, retorna erro se o arquivo existir
#t - texto
#b - binário

'''f.write("CFB Cursos\n")
f.write("Curso de Python")'''

txt = input("Digite um texto: ")
f.write(txt + "\n")

f.close()