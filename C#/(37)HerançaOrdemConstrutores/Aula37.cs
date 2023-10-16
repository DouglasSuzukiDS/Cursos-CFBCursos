using System;

    //A ordem sempre será da Base para seus derivados
class Base{
    public Base(){
        Console.WriteLine("Construtor da Classe Base");
    }
}

class Derivada1:Base{
    public Derivada1(){
        Console.WriteLine("Construtor da Classe Derivada 1");
    }
}
class Derivada2:Derivada1{
    public Derivada2(){
        Console.WriteLine("Construtor da Classe Derivada 2");
    }
}

class Aula37{
    static void Main(){
        Derivada2 derivada2 = new Derivada2();
    }
}