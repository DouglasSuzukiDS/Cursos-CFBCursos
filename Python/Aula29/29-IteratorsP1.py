carros = ["HRV", "Polo", "Jetta", "Cruze", "Fusion", "Golf", "Focus", "Onix", "Fit"]

itCarros = iter(carros) #iter() = Chama a List
#print(next(itCarros)) #next() = Mostra um item da lista por vez;

while itCarros:
    try:
        print(next(itCarros))
    except StopIteration:
        #print("Fim da Lista")
        break
