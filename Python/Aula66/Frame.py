from tkinter import *
from tkinter import messagebox

def mostrarMsg():
    messagebox.showinfo(title = "CFB Cursos", message = "CFB Cursos, Curso de Python/Tkinter") #Mostra uma mensagem de Informação

app = Tk()
app.title("CFB Cursos")
app.geometry("500x300")

vnum_cxtexto = StringVar()

fr_quadro1 = Frame(app, borderwidth = 1, relief = "solid")
#relief (flat, raised, sunken, solid)
fr_quadro1.place(x = 10, y = 10, width = 300, height = 100)

lb_tipo = Label(fr_quadro1, text = "Tipo de Cx(1, 2 ou 3)")
lb_tipo.place(x = 10, y = 10)
tb_num = Entry(fr_quadro1, textvariable = vnum_cxtexto)
vnum_cxtexto.set("1")
tb_num.place(x = 10, y = 30)

"""btn_msg = Button(fr_quadro1, text = "Mostrar Mensagem", command = mostrarMsg) #usando Lambda é possivel fazer a função receber parametros
btn_msg.place(x = 10, y = 50)"""

fr_quadro2 = Frame(app, borderwidth = 1, relief = "solid", background = "#008")
#relief (flat, raised, sunken, solid)
fr_quadro2.place(x = 10, y = 120, width = 300, height = 100)

btn_msg = Button(fr_quadro2, text = "Mostrar Mensagem", command = mostrarMsg) #usando Lambda é possivel fazer a função receber parametros
btn_msg.place(x = 10, y = 50)

app.mainloop()
