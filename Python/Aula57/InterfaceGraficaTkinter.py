from tkinter import * #Importa tudo do tkinter, interface gráfica

app = Tk()
app.title("CFB Cursos") #Titulo
app.geometry("500x300") #Tamanho
app.configure(background = "#008") #Cor de fundo

txt1 = Label(app, text = "Curso de Python", background = "#008", foreground = "#FFF")
txt1.place(x = 10, y = 10, width = 100, height = 20) #Aplica a configuração

vtxt = "Módulo Tkinter"
vbg = "#FF0"
vfg = "#000"
txt2 = Label(app, text = vtxt, bg = vbg, fg = vfg)
txt2.pack(ipadx = 20, ipady = 20, padx = 5, pady = 5, side = "top", fill = X, expand = True) #Pack = Posicionamento do elemento dentro do Container
#ipad = Padding Interno; 
#pad = Padding Externo;
#side = Posição do elemento, Left, Top, Right, Botton;
#fill = Prenchimento X ou Y
#expand = Expansivo ou Não

app.mainloop() #Roda a aplicação
