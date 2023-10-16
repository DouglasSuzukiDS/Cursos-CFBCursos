#import canal #Importa o arquivo externo

"""canal.canal_nome()
print(canal.jogador["nome"])"""


#import canal as cn #Aqui muda o nome para o import nesse arquivo

"""cn.canal_nome()
print(cn.jogador["nome"])"""

#from canal import jogador #Só importa um parte do arquivo externo
#print(jogador["nome"])

import canal

res = dir(canal)

print(res)
