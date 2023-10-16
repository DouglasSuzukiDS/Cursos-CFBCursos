import datetime

data = datetime.datetime.now() #Retorna a data corrente
nasc = datetime.datetime(1978,3,7) #Aqui cria um elemento com data

print(str(data.day) + "/" + str(data.month) + "/" + str(data.year))
print(data.strftime("%A"))

"""
strftime() = Permite obter um valor expecifico na data
    %a: Texto Dia da semana abreviado
    %A: Texto Dia da semana completo
    %w: Numero do dia da semana, domingo => 0
    %d: Numero Dia do mês
    %b: Texto mês abreviado
    %B: Texto mês
    %m: Numero do mês
    %y: Ano com dois digitos
    %Y: Ano com quatro digitos
    %H: Hora 00-23
    %I: Hora 00 - 12
    %p: AM / PM
    %M: Minutos
    %S: Segundos
    %F: Microsegundos
    %j: Dia do Ano 001 - 365
    %W: Numero da Semana do Ano
"""
