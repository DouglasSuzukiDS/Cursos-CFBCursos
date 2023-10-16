#(20)Funções Parte 2 - Argumentos de Entrada

"""def somar(n1, n2, n3, n4):
    r = n1 + n2 + n3 + n4
    print("Soma = " + str(r))
    print("youtube.com/cfbcursos\n")
somar(5, 7, 3, 2)
somar(12, 8, 1, 20)
somar(1, 2, 0, 0)"""

"""def textos(*txt): # *VAR Argumento Arbitrarios = Numero qualquer de argumentos
    for t in txt:
        #print(txt[POS]) #Aqui imprime so na posição escolha(s)
        print(t) #Aqui ele imprimira todos os valores
 
textos("CFB Cursos", "Python")"""


"""def somar(*num):  # *VAR Argumento Arbitrarios = Numero qualquer de argumentos
    for t in txt:
    r = 0
    for n in num:
        r += n

    print("Soma = " + str(r))
    print("youtube.com/cfbcursos\n")

somar(5, 2, 3, 5, 20, 0, 15, 1, 37)"""

"""def carros(c = "Golf"): #Valor padrão caso não tenha argumentos na chamada
    print("Modelo: " + c)

carros("HRV")"""

valores = [1, 5, 3, 2]
def somar(num):  
    r = 0
    for n in num:
        r += n

    print("Soma = " + str(r))
    print("youtube.com/cfbcursos\n")

somar(valores)
