using System;
//Classe Abstrata = Classe de Referência/Base para outras classe, não permitindo a instanciação de novos objetos, só servem para serem herdadas;
//Caso se crie metodos não abstratos, devem ser implementados;
//Caso se crie metodos abstratos, não podem ser implementados;

abstract class Veiculo{ // CLasse Base Abstrata
    //Protected = Não se pode acessar externamente, porém as classes que herdam a classe, permite o acesso;

    protected int velMaxima;
    protected int velAtual;
    protected bool ligado;
    public Veiculo(){
        ligado = false;
        velAtual = 0;
    }
    public void setLigado(bool ligado){
        this.ligado = ligado;
    }
    public int getVelAtual(){
       return velAtual;
    }

    abstract public void aceleracao(int mult);
}

class Carro:Veiculo{
    public Carro(){
        velMaxima = 120;
    }
    override public void aceleracao(int mult){ //Sobreescreve o Metodo
        velAtual += 10*mult;
    }
}

class Aula39{
    static void Main(){
        Carro carro1 = new Carro();

        carro1.aceleracao(1);
        carro1.aceleracao(-1);

        Console.WriteLine(carro1.getVelAtual());
    }
}