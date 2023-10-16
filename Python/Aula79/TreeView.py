from tkinter import *
from tkinter import ttk

app = Tk()
app.title("CFB Cursos")
app.geometry("600x300")

listaNomes = [['0', 'Bertilda', '9875'], ['1', 'Crisloid', '2341'], ['2', 'Julsivam', '3784']]

#TreeView = Seria como uma caixa de listagem; Um grid que se carrega conteudo dentro dele

tv = ttk.Treeview(app, column = ('id', 'nome', 'fone'), show = 'headings')
tv.column('id', minwidth = 0, width = 50)
tv.column('nome', minwidth = 0, width = 250)
tv.column('fone', minwidth = 0, width = 100)
tv.heading('id', text = 'ID')
tv.heading('nome', text = 'NOME')
tv.heading('fone', text = 'FONE')

tv.pack()

for(i, n, f) in listaNomes:
    #tv.insert("", "end", values = ('10', 'Kaido', '1234')) #Insere manualmente no final do TreeView
    tv.insert("", "end", values = (i, n, f)) #Insere no final do TreeView

app.mainloop()