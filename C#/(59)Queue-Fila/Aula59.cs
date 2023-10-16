using System;
using System.Collections.Generic;
class Aula59{
    static void Main(){
        //Queue/Fila = Primeiro elemento a entrar, e o primeiro a sair;
        //string[] vs = {"Carro", "Moto", "Navio", "Aviao"}; // Para iniciar um Queue com um Array, basta informar o nome ao método;
        Queue<string> veiculos = new Queue<string>();

        veiculos.Enqueue("Carro"); //Insere elemento no final;
        veiculos.Enqueue("Moto");
        veiculos.Enqueue("Navio");
        veiculos.Enqueue("Aviao");

    string v = "Patinente";
        if(veiculos.Contains(v)){ //Verifica se o elemento existe na Queue;
            Console.WriteLine("Veiculo " + v + " encontrado");
        }else{
            Console.WriteLine("Veiculo " + v + " nao esta na fila");
        }
        //veiculos.Clear();
        //Console.WriteLine("Primeiro Veiculo " + veiculos.Dequeue()); // Retorna o valor do primeiro elemento, e depois o remove;
        //Console.WriteLine("Primeiro Veiculo " + veiculos.Dequeue());
        Console.WriteLine("Primeiro Veiculo " + veiculos.Peek()); //Retorna o valor do primeiro elemento, mas NAO o remove;
        Console.WriteLine("Tamanho fila: " + veiculos.Count);

        /*foreach(string veic in veiculos){
            Console.WriteLine("Veiculo " + veic);
        }*/

        Console.WriteLine("Tamanho fila: " + veiculos.Count);

        while(veiculos.Count > 0){
            Console.WriteLine(veiculos.Dequeue());
        }
        Console.WriteLine("Tamanho fila: " + veiculos.Count);

    }
}