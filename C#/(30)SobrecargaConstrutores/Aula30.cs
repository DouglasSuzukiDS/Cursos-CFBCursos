using System;

public class Jogador{ //Classe
    public int energia;
    public bool vivo;
    public string nome;
    public Jogador(){
        energia = 100;
        vivo = true;
        nome = "Jogador";
    }

    public Jogador(string n, int e){
        energia = e;
        vivo = true;
        nome = n;
    }
    public Jogador(string n, int e, bool v){
        energia = e;
        vivo = v;
        nome = n;
    }
    public void info(){
        Console.WriteLine("Nome do Jogador...: {0}", nome);
        Console.WriteLine("Energia do Jogador: {0}", energia);
        Console.WriteLine("Estado do Jogador.: {0}\n", vivo);
    }
    public void info(int n){
        Console.WriteLine("Nome do Jogador...: {0}", nome);
        Console.WriteLine("Energia do Jogador: {0}", energia);
        Console.WriteLine("Estado do Jogador.: {0}\n", vivo);
    }
    public Jogador(string n){ //Metodo Construtor: Métodos que iram iniciar as propriedades/variáveis dos objetos instanciados, e devem ter o mesmo nome da Classe, é chamado automaticamente quando instaciado um objeto dessa classe;
        energia = 100;
        vivo = true;
        nome = n;
    }
}

class Aula30{
    static void Main(){

        Jogador j1 = new Jogador();
        Jogador j2 = new Jogador("Kaido");
        Jogador j3 = new Jogador("BigMom", 100);
        Jogador j4 = new Jogador("Kurohige", 0, false);

        j1.info();
        j2.info();
        j3.info();
        j4.info();
    }
}
