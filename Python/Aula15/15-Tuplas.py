"""l_carros = ["HRV", "Golf", "Argo"] #Lista
l_carros[2] = "Focus"  """

t_carros = ("HRV", "Golf", "Argo") #Tupla = Não se pode alterar seu valores
l_carros = list(t_carros) #TapeCast para List
l_carros[2] = "Focus"
t_carros = tuple(l_carros) #TapeCast para Tupla

for x in t_carros:
    print(x)
