from tkinter import *
import os 
import Banco

#print(x)
def gravarDados():
    if tb_nome.get() != "":
        vnome = tb_nome.get()
        vfone = tb_fone.get()
        vemail = tb_email.get()
        vobs = tb_obs.get("1.0", END)
        vquery = "INSERT INTO tb_contatos (T_NOMECONTATO, T_TELEFONECONTATO, T_EMAILCONTATO, T_OBS) values ('"+vnome+"', '"+vfone+"', '"+vemail+"', '"+vobs+"')"
        Banco.dml(vquery)
        tb_nome.delete(0, END)
        tb_fone.delete(0, END)
        tb_email.delete(0, END)
        tb_obs.delete("1.0", END)
        print("Dados Gravados")
    else:
        print("ERRO")


app = Tk()
app.title("CFB Cursos")
app.geometry("500x300")
app.configure(background = "#DDE")

#anchor => N = Norte, S = Sul, E = Leste, W = Oeste = Posicionamento
#NE = Nordeste, SE = Sudeste, SO = Sudoeste, NO = Noroeste
Label(app, text = "Nome", background = "#DDE", foreground = "#009", anchor = W).place(x = 10, y = 10, width = 100, height = 20)
tb_nome = Entry(app) #Campo de Texto
tb_nome.place(x = 10, y = 30, width = 200, height = 20)

Label(app, text = "Telefone", background = "#DDE", foreground = "#009", anchor = W).place(x = 10, y = 60, width = 100, height = 20)
tb_fone = Entry(app) #
tb_fone.place(x = 10, y = 80, width = 100, height = 20)

Label(app, text = "Email", background = "#DDE", foreground = "#009", anchor = W).place(x = 10, y = 110, width = 100, height = 20)
tb_email = Entry(app) 
tb_email.place(x = 10, y = 130, width = 300, height = 20)

Label(app, text = "OBS", background = "#DDE", foreground = "#009", anchor = W).place(x = 10, y = 160, width = 100, height = 20)
tb_obs = Text(app) #Componente de Multi linhas
tb_obs.place(x = 10, y = 180, width = 300, height = 80)

Button(app, text = "Gravar", command = gravarDados).place(x= 10, y = 270, width = 100, height = 20)

app.mainloop() #Executa o Programa
