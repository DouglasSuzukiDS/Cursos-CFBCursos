x = 1 #int
x = "CFB Cursos" #String
x = 15.6 #Float
x = True #False #Bool

#print("Valor: "+str(x)) #str = Converte o Valor para String
#print("Tipo: "+str(type(x))) #Type(VAR) = Mostra o tipo da Variaveln

#n1 = 5 ;n2 = 2; x = complex(n1, n2)
n1 = 5 ;n2 = 2; x = complex(1j)
"""print(x.real)
print(x.imag)"""

x = ["Carro", "Aviao", "Navio", 1, 58.3, True] #List / Array
x = ("Carro", "Aviao", "Navio", 1, 58.3, True) #Tupla = Parecido com List/Array, porém não se pode modificar o seu valor;
"""print("Valor: " + x[0])
print("Tipo: "+str(type(x)))"""

x = range(0, 100, 1) #Range = Cria uma List criando posições
"""print("Valor: " + str(x[0]))
print("Tipo: "+str(type(x)))"""

x = { #Dict = Variavel que trabalha em par, NOME : VALOR
    "canal": "CFB Cursos",
    "curso": "Curso de Python",
    "nome": "Kaido"
}
"""print("Valor: " + x["curso"])
print("Tipo: "+str(type(x)))"""

x = {5,7,4,5,7,4,8} #Set = Ordena os valores, e não os repete
x = frozenset({5, 7, 4, 5, 7, 4, 8}) #Frozenset = Bloqueia o Set, não permitindo a alteração
print("Valor: " + str(x))
print("Tipo: "+str(type(x)))

