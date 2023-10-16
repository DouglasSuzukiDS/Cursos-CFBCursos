from tkinter import *

#Scale = Barra rolante onde se pode alterar um valor

def valorEscala():
    print("Valor da escala: " + str(sc_escala.get()))

app = Tk()
app.title("CFB Cursos")
app.geometry("500x300")

lb_valor = Label(app, text = "Valor")
lb_valor.pack()

sc_escala = Scale(app, from_= 0, to = 100, orient = HORIZONTAL) #Scale(pai, COMENÇO, FIM, ORIENTAÇÃO HOR-VER)
sc_escala.set(25) #Onde ira começar o cursor
sc_escala.pack()

btn_valor = Button(app, text = "Valor Escala", command = valorEscala)
btn_valor.pack()

app.mainloop()