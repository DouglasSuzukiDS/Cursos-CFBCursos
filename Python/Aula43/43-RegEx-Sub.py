import re #RegEx

texto = "Curso de Python do CFB Cursos, Canal do Youtube"

#res = re.split("\s", texto) #Espaço
res = re.sub("\s", "-", texto)
res = re.sub(",", ".", res)

print(res)