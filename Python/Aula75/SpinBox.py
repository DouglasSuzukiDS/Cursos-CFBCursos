from Tkinter import *
 #SpinBox = Caixa numerica onde s epode aumentar/diminuir o valor

def ImpVal():
     print("Valor: " + str(sb_valores.get()))

app = Tk()
app.title("CFB Cursos")
app.geometry("500x300")

#sp_valores = Spinbox(app, from_ = 1, to = 10)
sb_valores = Spinbox(app, values = (1, 2, 3, 4, 5))
sb_valores.pack()

btn_valor = Button(app, text = "Imprimir valor", command = ImpVal)
btn_valor.pack()

app.mainloop()