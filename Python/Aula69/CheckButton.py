from tkinter import *

def futebolClicado():
    esp = str(vfutebol.get())
    print("Futebol: " + esp)

def voleiClicado():
    esp = str(vvolei.get())
    print("Volei: " + esp)

def basqueteClicado():
    esp = str(vbasquete.get())
    print("Basquete: " + esp)

app = Tk()
app.title("CFB Cursos")
app.geometry("500x300")

#StringVar() => O Caractere tem que ser Letra
#IntVar() => O os caracteres devem ser 1 para On, e 0 para Off, e o fundo nao sei cinza 
vfutebol = IntVar()
vvolei = IntVar()
vbasquete = IntVar() 

fr_quadro1 = Frame(app, borderwidth = 1, relief = "solid")
#relief (flat, reised, sunken, solid)
fr_quadro1.place(x = 10, y = 10, width = 300, height = 100)

cb_futebol = Checkbutton(fr_quadro1, text = "Futebol", variable = vfutebol, onvalue = 1, offvalue = 0, command = futebolClicado) 
cb_futebol.pack(side = LEFT)

cb_volei = Checkbutton(fr_quadro1, text = "Volei", variable = vvolei, onvalue = 1, offvalue = 0, command = voleiClicado) 
cb_volei.pack(side = LEFT)

cb_basquete = Checkbutton(fr_quadro1, text = "Basquete", variable = vbasquete, onvalue = 1, offvalue = 0, command = basqueteClicado) 
cb_basquete.pack(side = LEFT)
#Onvalue = Quando o valor estiver seleionado
#Offvalue = Quando o valor não estiver selecionado


app.mainloop()