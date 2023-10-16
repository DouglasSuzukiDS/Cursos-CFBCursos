#26 - Try Except / Tratamento de Erros
"""except => Só executa se o Try retornar algum erro
    NameError: Erro no Nome/Variavel"""

#finally => Só executa se o Try retornar o erro ou não
#raise Exception() = Gera um erro

"""#x=10
try:
    print(x)
except:
    print("Erro no programa")
else:
    print("Tudo Certo")
finally:
    print("Fim do Tratamento")"""

"""num = 0
if num < 1:
    raise Exception("Valor nao permitido")"""

"""num = "OnePiece"
if not type(num) is int: 
    raise Exception("Somente Numero Permitidos")
else:
    print(num)"""

num = 10
if not type(num) is int:
    raise Exception("Somente Numeros Permitidos")
else:
    print(str(num))