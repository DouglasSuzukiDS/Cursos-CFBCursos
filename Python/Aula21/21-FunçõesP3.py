#(21)FunçõesP3 - Retorno de Valores

valores = [1, 5, 3, 2, 10, 4, 8]


def somar(num):
    r = 0
    for n in num:
        r += n
    return r


r = somar(valores)

"""def valLista(num): #Imprime os valores
    for v in num:
        print(v)
#valLista(valores)"""
 
#print(str(valores) + ": Soma = " + str(somar(valores)))
print(str(valores) + ": Soma = " + str(r))
