using System;

struct Carro{
    public string modelo;
    public string cor;

    public void info(){ //Metodo
        Console.WriteLine("Modelo: {0}", this.modelo);
        Console.WriteLine("Cor...: {0}", this.cor);
        Console.WriteLine("-------------------------");
    }
}
class Aula45{
    static void Main(){
        //int[] numeros = new int[10]; //Aqui se cria um Array
        Carro[] carros = new Carro[4]; 

        carros[0].modelo="HRV";
        carros[0].cor = "Prata";

        carros[1].modelo = "Golf";
        carros[1].cor = "Azul";

        carros[2].modelo = "Jetta";
        carros[2].cor = "Branco";

        carros[3].modelo = "Argo";
        carros[3].cor = "Preto";

        /* Impressão Individual
            carros[0].info();
            carros[1].info();
            carros[2].info();
            carros[3].info();*/

        for(int i=0; i<carros.Length; i++){
            carros[i].info();
        }

    }
}