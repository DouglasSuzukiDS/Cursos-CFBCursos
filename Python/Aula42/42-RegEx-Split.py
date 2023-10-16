import re #RegEx

texto = "Curso de Python do CFB Cursos, Canal do Youtube"

#res = re.split("\s", texto) #Espaço
res = re.split("d", texto)

print(res)
print(res[2])
for t in res:
    print(t)