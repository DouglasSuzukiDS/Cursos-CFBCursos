curso = "Curso de Python"

#print(curso[0]) #Imprime o caractere na posição
#print(curso[9:15]) # Imprime os caracteres na posição inicial:final determinada

#print(curso.strip()) #strip() = Remove os espaços do começo e fim

#print(curso.lower()) #lower() = Converte string para Minusculo

#print(curso.lower().strip())

#print(curso.upper()) #upper() = Converte string para Maiusculo

#print(curso.replace("Python", "P")) #replace("", "") = Faz a substituição de um conteudo para outro

a = curso.split(" ") #split() = Faz um corte onde se encontra espaço, retorna um Array para cada corte
print(a[2])
print("Tamanho: " + str(len(curso))) #len() = Tamanho
