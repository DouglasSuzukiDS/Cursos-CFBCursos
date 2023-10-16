"""a = 10
b = 5
res = 0
op = "+"

if op == "+":
    res = a + b

elif op == "-":
    res = a - b

elif op == "*":
    res = a * b

elif op == "/":
    res = a / b

else: #Quando nenhum dos testes for TRUE
    print("Operador Invalido")

print(str(a) + op + str(b) + " = " + str(res))"""

clima = "sol"
dinheiro = 650
lugar = ""

if clima == "sol" or (dinheiro > 300 and dinheiro < 500):
    lugar = "clube"
else:
    lugar = "cinema"

print("Vou ao " + lugar)

#   AND
#   V   V   =   V
#   V   F   =   F
#   F   V   =   F
#   F   F   =   F

#   OR
#   V   V   =   V
#   V   F   =   V
#   F   V   =   V
#   F   F   =   F
