import json

# jogador = '{ 
#     "nome" : "Kaido", 
#     "time" : " aviadores", 
#     "vivo" : "True", 
#     "energia" : 100, 
#     "mochila" : ["pederneira", 
#     "corda", "linha", "arame"], 
#     "aeronaves" : [ 
#         {"tipo" : "transporte", "habilidade" : 80}, 
#         {"tipo" : "ataque", "habilidade" : 100}, 
#         {"tipo" : "reconhecimento",  "habilidade" : 50} 
#         ] 
# }'

jogador_j = '{ "nome" : "Kaido", "time" : "aviadores", "vivo" : "True", "energia" : 100, "mochila" : ["pederneira", "corda", "linha", "arame"], "aeronaves" : [ {"tipo" : "transporte", "habilidade" : 80}, {"tipo" : "ataque", "habilidade" : 100}, {"tipo" : "reconhecimento",  "habilidade" : 50} ] }' #Dictionary -> Objeto Json

jogador = json.loads(jogador_j) #Transforma em String

#Chaves
'''for c in jogador:
    print(c)'''

#Itens
'''for i in jogador.items():
    print(i)'''

#Valores
'''for v in jogador.values():
    print(v)'''

#Nome do Time
#print(jogador["time"])

#Itens da mochila
'''for im in jogador["mochila"]:
    print(im)'''

#Aeronaves
for a in jogador["aeronaves"]:
    #print(a) #Todos seus itens
    #print(a["tipo"]) #Tipo
    #print(a["habilidade"])
    print(a["tipo"] + " - " + str(a["habilidade"]) )