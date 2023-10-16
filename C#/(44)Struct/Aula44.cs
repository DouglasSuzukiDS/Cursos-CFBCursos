using System;
//Struct: Estrutura que permite armazenar tipos de dados diferentes, e não se pode herdar;
//Struct é tratada como tipo Value, já a Classe é tratada como tipo Reference;

struct Carro{
    public string marca;
    public string modelo;
    public string cor;

    public Carro(string marca, string modelo, string cor){ // Construtor
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }

    public void info(){ //Metodo
        Console.WriteLine("Marca.: {0}", this.marca);
        Console.WriteLine("Modelo: {0}", this.modelo);
        Console.WriteLine("Cor...: {0}", this.cor);
    }
}
class Aula44{
    static void Main(){
        
        /* Carro c1; // Aqui se usa os valores atribuidos;

        c1.marca="VW";
        c1.modelo="Golf";
        c1.cor="Azul"; 

        Console.WriteLine("Marca.: {0}",c1.marca);
        Console.WriteLine("Modelo: {0}", c1.modelo);
        Console.WriteLine("Cor...: {0}", c1.cor); */

        Carro c1 = new Carro("Honda", "HRV", "Prata"); //Aqui se usa os valores passados pelo Construtor;
        Carro c2 = new Carro("VW", "Golf", "Azul");
        c1.info();
        c2.info();

    }
}