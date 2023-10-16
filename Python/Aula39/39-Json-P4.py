import json

with open('C:/Users/Krzysztof/Documents/Python/Aula39/jogador.json') as f: 
    jogador = json.load(f)

def linha():
    print("-------------------------------------")

#Chaves
for c in jogador:
    print(c)
linha()

#Itens
for i in jogador.items():
    print(i)
linha()

#Valores
for v in jogador.values():
    print(v)
linha()

#Nome do Time
print(jogador["time"])
linha()

#Itens da mochila
for im in jogador["mochila"]:
    print(im)
linha()

#Aeronaves
for a in jogador["aeronaves"]:
    #print(a) #Todos seus itens
    #print(a["tipo"]) #Tipo
    #print(a["habilidade"])
    print(a["tipo"] + " - " + str(a["habilidade"]) )