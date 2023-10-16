using System; 

class Veiculo{ //Classe Base
    public int velAtual;
    private int velMax; //Private só permite acesso dentro da propria classe usando metodos;
    protected bool ligado; //Protected permite acesso de classe derivadas, mas somente pelas classes;
    public Veiculo(int velMax){
        velAtual=0;
        this.velMax=velMax;
        ligado=false;
    }
    public bool getLigado(){
        return ligado;
    }
    public int getVelMax(){
        return velMax;
    }
}

class Carro:Veiculo{
    public string nome;
    public Carro(string nome, int vm):base(vm){ //Derivada de Veiculo
        this.nome=nome;
        ligado=true;
    }
}
class Aula36{
    static void Main(){

        Carro carro = new Carro("Bonitão", 120);

        Console.WriteLine("Nome......: {0}", carro.nome);
        Console.WriteLine("Vel.Máxima: {0}", carro.getVelMax());
        Console.WriteLine("Ligado....: {0}", carro.getLigado());
    }
}