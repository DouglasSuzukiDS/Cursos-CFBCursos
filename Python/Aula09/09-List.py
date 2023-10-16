carros = ["HRV", "Golf", "Argo", "Focus"] #List

carros.append("Fit")  #append() Permite inserir elementos na List
carros.append("Fusion")
carros.append("Polo")

#carros.remove("Fusion") #remove() = Remove o item da List
#carros.pop() #pop() = Remove o ultimo item da List
#del carros[2] # del LIST[INDDICE] = Remove o elemento no Indice

"""print(str(len(carros)) + " carros na lista")
print(carros)"""

"""carros2 = list(carros) #list(LiST) = Copia os itens de um List para Outro
print(str(len(carros2)) + " carros na lista")
print(carros2)"""

carros2 = ["Fusca", "147", "Brasilia", "Celta"]

carros3 = carros + carros2

print(str(len(carros3)) + " carros na lista")
print(carros3)

