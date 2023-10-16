from tkinter import *

def imprimirEsporte():
    ve = vesporte.get() #Recebe o valor da variavel
    if ve == "f":
        print("Esporte Futebol")
    elif ve == "v":
        print("Esporte Volei")
    elif ve == "b":
        print("Esporte Basquete")
    else:
        print("Selecione um Esporte")

app = Tk()
app.title("CFB Cursos")
app.geometry("500x300")

vesporte = StringVar() #Armazenara o valor do Radio Button
vcor = StringVar()

rb_futebol = Radiobutton(app, text = "Futebol", value = "f", variable = vesporte)
rb_futebol.pack()

rb_volei = Radiobutton(app, text = "Volei", value = "v", variable = vesporte)
rb_volei.pack()

rb_basquete = Radiobutton(app, text = "Basquete", value = "b", variable = vesporte)
rb_basquete.pack()

rb_verde = Radiobutton(app, text = "Verde", value = "#0F0", variable = vcor)
rb_verde.pack()

rb_vermelho = Radiobutton(app, text = "Vermelho", value = "#F00", variable = vcor)
rb_vermelho.pack()

btn_esporte = Button(app, text = "Esporte Selecionado", command = imprimirEsporte)
btn_esporte.pack()

app.mainloop()