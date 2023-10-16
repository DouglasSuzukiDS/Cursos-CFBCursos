#Chave/Valor - Valor/Value
"""carro = {
    "Fabricante":"Honda", 
    "Modelo": "HRV", 
    "Ano":"2016",
    "Cor":"Prata"
}

#print(carro) #Aqui imprime todo o conteudo
#print(carro["Fabricante"]) #Aqui imprime só o valor do termo
fab = carro["Fabricante"] #Indice da chave
#fab = carro.get("Fabricante") #get() = Obtem o valor da elemento

carro["Cor"] = "Preto"

# for x in carro: #Para Chave ou Valor*
#     #print(x) Aqui imprime a Chave
#     print(carro[x]) #Aqui imprime o Valor

carro["Cambio"] = "Automatico" #Insere uma nova Key/Value
#del carro["Cambio"] #Remove o item
carro.pop("Cambio") #Remove o item


print("Tamanho do Dictionary: " + str(len(carro))) #Tamanho

carro.clear() #Remove todo o conteudo

if "Modelo" in carro: 
    print("Sim, modelo e uma chave \n")

for c, v in carro.items(): #Aqui impreme a Chave eo Valor
    print(c + ": " + v)"""

"""carros = {
    "Carro1": {
        "Fabricante": "Honda",
        "Modelo": "HRV"
    },
    "Carro2":{
        "Fabricante":"Volkswagem",
        "Modelo":"Golf"
    },
    "Carro3":{
        "Fabricante":"Ford",
        "Modelo":"Focus"
    }
}

print(carros["Carro1"]["Fabricante"])"""

Carro1 = {
    "Fabricante": "Honda",
    "Modelo": "HRV"
}
Carro2 = {
    "Fabricante": "Volkswagem",
    "Modelo": "Golf"
}
Carro3 = {
    "Fabricante": "Ford",
    "Modelo": "Focus"
}

Carros ={
    "C1":Carro1,
    "C2":Carro2,
    "C3":Carro3
}

print(Carros["C1"]["Modelo"])
