from tkinter import *
from tkinter import ttk 

def imprimirEsporte():
    ve = cb_esportes.get()
    print("Esporte " + ve)

app = Tk()
app.title("CFB Cursos")
app.geometry("500x300")

lisstEsportes = ["Futebol", "Volei", "Basquete"]

lb_esportes = Label(app, text = "Esportes")
lb_esportes.pack()

cb_esportes = ttk.Combobox(app, values = lisstEsportes)
cb_esportes.set("Futebol") #Se omitir, a opção fica em vazia
cb_esportes.pack()

btn_esporte = Button(app, text = "Esporte Selecionado", command = imprimirEsporte)
btn_esporte.pack()

app.mainloop()