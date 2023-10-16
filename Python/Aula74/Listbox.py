from Tkinter import *

def imprimirEsporte():
    print("Esporte: " + str(lb_esportes.get(ACTIVE)))

def addEsporte():
    lb_esportes.insert(END, vnovoesporte.get())

app = Tk()
app.title("CFB Cursos")
app.geometry("500x300")

listaEsportes = ["Futebol", "Volei", "Basquete"]

lb_esportes = Listbox(app)
for esportes in listaEsportes:
    lb_esportes.insert(END, esportes)
lb_esportes.pack()

btn_esporte = Button(app, text = "Imprimir Esporte", command = imprimirEsporte)
btn_esporte.pack()

vnovoesporte = Entry(app)
vnovoesporte.pack()
btn_inseriresporte = Button(app, text = "Adicionar Esporte", command = addEsporte)
btn_inseriresporte.pack()

app.mainloop()