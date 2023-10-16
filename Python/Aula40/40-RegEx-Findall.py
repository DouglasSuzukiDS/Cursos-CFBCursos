import re #RegEx

texto = "Cursos de Python do CFB Cursos, Canal do Youtube"

#res = re.findall("o", texto) #Retorna a coleção do termo

pesq = input("Pesquisar: ")

res = re.findall(pesq, texto) #Retorna a coleção do termo

print(res)
qtde = len(res)

print("QTDE: " + str(qtde))

for t in res:
    print(t)