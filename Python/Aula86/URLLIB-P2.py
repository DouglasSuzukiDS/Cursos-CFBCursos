import urllib.request # Permite capturar dados de páginas HTML

pagina = urllib.request.urlopen("http://cfbcursos.com.br/modelocursopython.html")
texto = pagina.read().decode("utf8")

produto = input("Digite o produto: ")
produto_pos = texto.find(produto)
produto_txt = texto[produto_pos:1000]
preco_pos = produto_txt.find("R$")
preco = texto[produto_pos + preco_pos:produto_pos + preco_pos + 7]

if(produto_pos > -1):
    #print(str(produto_pos))
    print("Produto: " + produto)
    print("Preco..: " + preco)
else:
    print("Produto não encontrado")