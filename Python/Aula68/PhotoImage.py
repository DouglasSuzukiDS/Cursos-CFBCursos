from tkinter import *
import os

pastaApp = os.path.dirname(__file__) #Pega o Caminho do arquivo

app = Tk()
app.title("CFB Cursos")
app.geometry("500x300")

imgLogo = PhotoImage(file = pastaApp + "\\logo.gif")
l_logo = Label(app, image = imgLogo)
l_logo.place(x = 10, y = 10)

app.mainloop()
