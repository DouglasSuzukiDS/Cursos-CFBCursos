from tkinter import *
from tkinter import ttk
from tkinter import messagebox
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
import os

pastaApp = os.path.dirname(__file__) #Caminho do arquivo

def criarPDF():
    try:
        cnv = canvas.Canvas(pastaApp + "\\cbfcursos.pdf", pagesize = A4)
        cnv.drawString(100, 100, "CFB Cursos")
        cnv.save()
    except:
        messagebox.showinfo(title="ERRO", message="Erro ao criar arquivo PDF")
        return
    messagebox.showinfo(title = "PDF", message = "PDF Criado")

app = Tk()
app.title("CFB Cursos")
app.geometry("500x300")

btn_criarPDF = Button(app, text = "Criar PDF", command = criarPDF)
btn_criarPDF.pack(side = "left", padx = 10)

app.mainloop()