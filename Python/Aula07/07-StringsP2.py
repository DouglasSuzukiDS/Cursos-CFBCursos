"""curso = "Curso de Python"
canal = "CFB Cursos"
palavra = "python"

res = curso + " do " + canal"""

cidade = "Belo Horizonte"
dia = 15
mes = "Dezembro"
ano = 2019
canal = "CFB Cursos"
data = "{}, {} de {} de {}\n \"{}\"" #format({VALOR PARA SER INSERIDO} ALGUM TEXTO)

""" Metodos de scape
\' = Imprime '
\" = Imprime "
\n = Quebra de Linha
\r = Como se fosse o Enter
\t = Tabulação
\b = Backspace, volta o cursor
"""

#res = palavra.upper() in texto.upper() #in = Se existe, true/false
#res = "Python" not in curso  #not in = Se não existe, true/false

#print(cidade + ", " + str(dia) + " de " + mes + " de " + str(ano))

print(data.format(cidade, dia, mes, ano, canal)) #format({}) = Substitui as variaveis passadas como parametros do metodos, e na sequencia a adiciona nos valores
