import re #RegEx

texto = "Curso de Python do CFB Cursos, Canal do Youtube"

res = re.search("Canal", texto)
#\AC #Começa com C *

if(res != None):
    pi = res.start()
    pf = res.end()
    tam = pf - pi
    print(res.start()) #Posição inicial da ocorrência
    print(res.end()) #Posiçãofinal da ocorrência
    print(tam)
else:
    print("Não encontrado")
