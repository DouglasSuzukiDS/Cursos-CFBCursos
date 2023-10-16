from tkinter import *
from tkinter import messagebox

def mostrarMsg(tiposmg, msg):
    if(tiposmg == "1"):
        messagebox.showinfo(title = "CFB Cursos", message = msg) #Mostra uma mensagem de Informação
    elif(tiposmg == "2"):
        messagebox.showwarning(title = "CFB Cursos", message = msg) #Mostra uma mensagem de Alerta
    elif(tiposmg == "3"):
        messagebox.showerror(title = "CFB Cursos", message = msg) #Mostra uma mensagem de Erro   

def resetarTB():
    res =  messagebox.askyesno("Resetar",  "Confirmar Reser do Textbox") 
    #askyesno / askquestion => Mostra SIM e Não (True / False)
    #askokcancel => Mostra Ok e CANCELAR (True / False)
    #askretrycancel => Repetir e Cancelar (True / False)
    #askyesnocancel => Mostra Sim, Não e Cancelar (True / False / None)
    if(res == True):
        tb_num.delete(0, END)
        tb_num.insert(0, "1")

vmsg = "Curso de Python/Tkinter"

app = Tk()
app.title("CFB Cursos")
app.geometry("500x300")

vnum_cxtexto = StringVar()

Label(app, text = "Tipo de Cx(1, 2 ou 3)").pack()
tb_num = Entry(app, textvariable = vnum_cxtexto)
vnum_cxtexto.set("1")
tb_num.pack()

btn_msg = Button(app, text = "Mostrar Mensagem", command = lambda:mostrarMsg(vnum_cxtexto.get(), vmsg)) #usando Lambda é possivel fazer a função receber parametros
btn_msg.pack()

btn_reset = Button(app, text = "Resetar Textbox", command = resetarTB)
btn_reset.pack()

app.mainloop()
