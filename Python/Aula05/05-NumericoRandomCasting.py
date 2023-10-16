import random #Importa a Biblioteca Random

num_i = 10 #Inteiro
num_f = 5.2 #Float
num_c = 1j #Complexo

#num_r = random.randrange(0,59)  #randrange(Inicio, Fim) = Gera um numero aleaório

num_r = [ #List / Array
    random.randrange(0, 59),
    random.randrange(0, 59),
    random.randrange(0, 59),
    random.randrange(0, 59),
    random.randrange(0, 59),
    random.randrange(0, 59)
    ]

#x = int(num_f) #Converte para Inteiro
#x = float(num_f) #Converte para Float
#print("Valor: " + str(x) + " - Tipo: " + str(type(x)))

x = num_r
#print("Valores: " + str(num_r) #Aqui Gera os Numero de uma vez;
print("Valor 1: " + str(num_r[0]))
print("Valor 2: " + str(num_r[1]))
print("Valor 3: " + str(num_r[2]))
print("Valor 4: " + str(num_r[3]))
print("Valor 5: " + str(num_r[4]))
print("Valor 5: " + str(num_r[5]))

