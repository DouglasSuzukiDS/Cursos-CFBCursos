#(23)Poo Classes P1

class Carro:
    velMax = 0
    ligado = False
    cor = ""

c1 = Carro()
c2 = Carro()
c3 = Carro()

c1.velMax = 200
c1.cor = "Preto"
c1.ligado = False

"""print("Velocidade Maxima: " + str(c1.velMax))
print("Cor: " + c1.cor)
#print("Ligado: " + str(c1.ligado))
estado = "Sim" if c1.ligado else "Nao"
print("Ligado: " + estado)"""

print("Velocidade Maxima: " + str(c2.velMax))
print("Cor: " + c2.cor)
estado = "Sim" if c2.ligado else "Nao"
print("Ligado: " + estado)
