import json

'''carros_json = '{"Marca" : "Honda", "Modelo" : "HRV", "Cor" : "Prata"}' #Json '''

#carros = json.loads(carros_json) #Transforma em uma String

'''for x in carros: #Imprime as Chaves
    print(x)'''

'''for x in carros.values(): #Imprime os Valores
    print(x)'''

'''for x in carros.items(): #Imprime todo o conteudo
    print(x)'''

'''for k, v in carros.items(): #Imprime as Chaves e os Valores
    print(k, v)'''

'''for k, v in carros.items(): #Imprime as Chaves e os Valores
    print(k + " - " + v)''' 

#Divisão de Conteudo

carros = {  
    "Marca" : "Honda",
     "Modelo" : "HRV", 
     "Cor" : "Prata"
} #Dictionary

carros_json = json.dumps(carros) #Transforma em Json

print(carros_json)
