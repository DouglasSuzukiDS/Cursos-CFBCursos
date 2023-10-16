import random 
import os 

erros=0
sorteado=random.randrange(0,100) #Sorteia de 0-100 
jogador = int(input("Digite seu numero: "))

while(sorteado != jogador):
    os.system('cls')
    if(sorteado > jogador):
        print("ERRO, o numero e maior")
    elif(sorteado < jogador):
        print("ERRO, o numero é menor")
    erros += 1
    jogador = int(input("Digite seu numero: "))

print("Numero " + str(jogador) + ", voce acertou em " + str(erros+1) + " tentativas")
