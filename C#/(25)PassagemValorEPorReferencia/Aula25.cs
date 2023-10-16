using System;
class Aula25{
    static void Main(){
        //Passagem por valor: Cria uma nova posição na memória diferente da varialvel;
 
        //Por Referência: Não cria uma nova posição na memória, utiliza a própria posição da variável;

        int num = 50; 
        //ref = Semelhante ao Ponteiro de C++, captura exatamente o endereço da memória, no caso o valor da variável;
        dobrar1(ref num); //Aqui Dobra;
        dobrar2(num); //Valor real passado;
        Console.WriteLine(num);
    }

    static void dobrar1(ref int valor){ //Passagem por Referência
        valor *= 2;
    }

    static void dobrar2(int valor){ //Passagem por Valor
        valor *= 2;
    }
}