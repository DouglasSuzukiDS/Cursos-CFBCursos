using System;
    //Métodos Virtuais: São Métodos que tem o mesmo NOME da sua Classe Base, com Classes Diferentes;
class Base{
    public Base() {
        Console.WriteLine("Construtor da Classe Base");
    }

    virtual public void info(){ //Virtual = Informa que pode haver metodos com esse mesmo nome
        Console.WriteLine("Base");
    }
}
class Derivada1:Base{
    public Derivada1(){
        Console.WriteLine("Construtor da Classe Derivada 1");
    }

    override public void info(){ //overrider = Informe que esse método podera ser reescrito;
        Console.WriteLine("Derivada 1");
    }
}
class Derivada2 : Derivada1{
    public Derivada2() {
        Console.WriteLine("Construtor da Classe Derivada 2");
    }

    override public void info(){ 
        Console.WriteLine("Derivada 2");
    }
}
class Aula38{
    static void Main(){
        Base Ref; //Referencia;
        Derivada1 derivada1 = new Derivada1();
        Derivada2 derivada2 = new Derivada2();
        /*derivada1.info();
        derivada2.info();*/

        Ref = derivada2;
        Ref.info();
    }
}