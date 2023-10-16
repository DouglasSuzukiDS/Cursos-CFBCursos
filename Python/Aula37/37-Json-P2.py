import json

'''carros_dictionary = {  
    "Marca" : "Honda",
     "Modelo" : "HRV", 
     "Cor" : "Prata"
} 
#Dictionary -> Objeto Json

carros_list = ["honda", "volkswagem", "ford", "fiat", "chevrolet"]
#List -> Array Json

carros_tupla = ("honda", "volkswagem", "ford", "fiat", "chevrolet")
#Tupla -> Array Json

carros_j = json.dumps(carros_dictionary, indent=4, separators=(": ", "="), sort_keys=True)

print(carros_j)'''

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

jogador_j = '{ "nome" : "Kaido", "time" : " aviadores", "vivo" : "True", "energia" : 100, "mochila" : ["pederneira", "corda", "linha", "arame"], "aeronaves" : [ {"tipo" : "transporte", "habilidade" : 80}, {"tipo" : "ataque", "habilidade" : 100}, {"tipo" : "reconhecimento",  "habilidade" : 50} ] }' #Dictionary -> Objeto Json

jogador = json.loads(jogador_j)

print(jogador)