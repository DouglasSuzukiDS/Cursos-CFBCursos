from tkinter import *
import os 

c = os.path.dirname(__file__) #Obtem o diretório da Aplicação
nomeArquivo = c + "\\nomes.txt"

def gravarDados():
    '''print("Nome....: %s" % vnome.get()) #Retorne o Texto Digitado
    print("Telefone: %s" % vfone.get()) 
    print("Email...: %s" % vemail.get()) 
    print("OBS.....: %s" % vobs.get("1.0", END)) #Captura do ao Inicio ao Fim '''

    arquivo = open(nomeArquivo, "a")
    arquivo.write("Nome......: %s" % vnome.get()) 
    arquivo.write("\nTelefone: %s" % vfone.get()) 
    arquivo.write("\nEmail...: %s" % vemail.get())
    arquivo.write("\nOBS.....: %s" % vobs.get("1.0", END))
    arquivo.write("\n")
    arquivo.close()


app = Tk()
app.title("CFB Cursos")
app.geometry("500x300")
app.configure(background = "#DDE")

#anchor => N = Norte, S = Sul, E = Leste, W = Oeste = Posicionamento
#NE = Nordeste, SE = Sudeste, SO = Sudoeste, NO = Noroeste
Label(app, text = "Nome", background = "#DDE", foreground = "#009", anchor = W).place(x = 10, y = 10, width = 100, height = 20)
vnome = Entry(app) #Campo de Texto
vnome.place(x = 10, y = 30, width = 200, height = 20)

Label(app, text = "Telefone", background = "#DDE", foreground = "#009", anchor = W).place(x = 10, y = 60, width = 100, height = 20)
vfone = Entry(app) #
vfone.place(x = 10, y = 80, width = 100, height = 20)

Label(app, text = "Email", background = "#DDE", foreground = "#009", anchor = W).place(x = 10, y = 110, width = 100, height = 20)
vemail = Entry(app) 
vemail.place(x = 10, y = 130, width = 300, height = 20)

Label(app, text = "OBS", background = "#DDE", foreground = "#009", anchor = W).place(x = 10, y = 160, width = 100, height = 20)
vobs = Text(app) #Componente de Multi linhas
vobs.place(x = 10, y = 180, width = 300, height = 80)

Button(app, text = "Gravar", command = gravarDados).place(x= 10, y = 270, width = 100, height = 20)

app.mainloop() #Executa o Programa
