from tkinter import *

def imprimirEsporte():
    ve = vesporte.get() #Recebe o valor da variavel
    if ve == "Futebol":
        print("Esporte Futebol")
    elif ve == "Volei":
        print("Esporte Volei")
    elif ve == "Basquete":
        print("Esporte Basquete")
    else:
        print("Selecione um Esporte")

app = Tk()
app.title("CFB Cursos")
app.geometry("500x300")

listaEsportes = ["Futebol", "Volei", "Basquete"]

vesporte = StringVar() #Armazenara o valor do Radio Button
vesporte.set(listaEsportes[0]) #Valor Padrão

bl_esportes = Label(app, text = "Esportes")
bl_esportes.pack()

op_esportes = OptionMenu(app, vesporte, *listaEsportes)
op_esportes.pack()

btn_esporte = Button(app, text = "Esporte Selecionado", command = imprimirEsporte)
btn_esporte.pack()

app.mainloop()