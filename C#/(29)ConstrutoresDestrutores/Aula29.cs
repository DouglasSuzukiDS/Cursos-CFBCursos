using System;

public class Jogador{ //Classe
    public int energia;
    public bool vivo;
    public string nome;
    public Jogador(string n){ //Metodo Construtor: Métodos que iram iniciar as propriedades/variáveis dos objetos instanciados, e devem ter o mesmo nome da Classe, é chamado automaticamente quando instaciado um objeto dessa classe;
        energia = 100;
        vivo = true;
        nome = n;
    }
    ~Jogador(){ //Destrutores: Métodos que destruirão os Objetos após eles não serem mais utilizados;
        Console.WriteLine("Jogador {0} foi destruido", nome);

    }
}

class Aula29{
    static void Main(){

        string nome1;
        Console.WriteLine("Digite o nome do Jogador 1: ");
        nome1 = Console.ReadLine();
        Jogador j1 = new Jogador(nome1);
        Jogador j2 = new Jogador("Kaido");

        Console.WriteLine("Nome do Jogador 1: {0}", j1.nome);
        Console.WriteLine("Nome do Jogador 2: {0}", j2.nome);
    }
}
