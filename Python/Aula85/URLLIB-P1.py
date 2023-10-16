import urllib.request # Permite capturar dados de páginas HTML

pagina = urllib.request.urlopen("http://cfbcursos.com.br/modelocursopython.html")
texto = pagina.read().decode("utf8")

#dado = texto[0:15]

#preco = texto[produto_pos_ini + 26:produto_pos_ini + 26 + 7] #Retorna o elemento na posição

#print(texto) # Retorna a página inteira
#print(dado)
#print(str(produto_pos_ini))

produto_pos_ini = texto.find("Mouse")
produto_pos_fim = produto_pos_ini + 5

qtde_pos_ini = produto_pos_ini + 14
qtde_pos_fim = qtde_pos_ini + 3

preco_pos_ini = qtde_pos_ini + 12
preco_pos_fim = preco_pos_ini + 7

print("Produto: " + produto)
print("Quantidade: " + qtde)
print("Preço: " + preco)