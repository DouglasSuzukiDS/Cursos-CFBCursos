using System;

static public class Jogador{ //Classe
    static public int energia;
    static public bool vivo;
    static public string nome;
    static public void iniciar(string n){
        energia = 100;
        vivo = true;
        nome = n;
    }

    static public void info(){
        Console.WriteLine("Nome do Jogador...: {0}", nome);
        Console.WriteLine("Energia do Jogador: {0}", energia);
        Console.WriteLine("Estado do Jogador.: {0}\n", vivo);
    }
}

class Inimigo{ //Class
    static public bool alerta;
    public string nome;
    public Inimigo(string n){ //Construtor
        alerta = false;
        nome = n;
    }
    public void info(){
        Console.WriteLine(nome);
        Console.WriteLine(alerta);
        Console.WriteLine("-------------------------");
    }
}

class Aula31{
    static void Main(){
        //Acessa a class
        Jogador.iniciar("Kaido");
        Jogador.info();

        //Instacia o objeto
        Inimigo i1 = new Inimigo("Doido");
        Inimigo i2 = new Inimigo("Maluco");
        Inimigo i3 = new Inimigo("Pirado");

        Inimigo.alerta = true;

        i1.info();
        i2.info();
        i3.info();
    }
}
