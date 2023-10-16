import os

"""carros = ["HRV", "Golf", "Argo", "Onix", "Focus"]
i = 0
tam = len(carros)

while i < tam:
    print(carros[i])
    i+=1   
print("\nFim do Loop")"""

carros = []
carro = input("Digite o nome do novo carro: ")
while carro != "-1":
    carros.append(carro)
    carro = input("Digite o nome do novo carro: ")

os.system('cls') # Limpar a tela
for x in carros:
    print(x)

print("\nFim do Loop")