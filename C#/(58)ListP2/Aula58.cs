using System;
using System.Collections.Generic;
class Aula58{
    static void Main(){
        //List = Seria um "Array Tunado";
        List<string> carros = new List<string>();
        //List<string> carros2 = new List<string>();
        string[] carros2 = new string[10]; // Para o uso do CopyTo

        carros.Add("Golf"); //Adiciona elementos;
        carros.Add("HRV");
        carros.Add("Focus");
        carros.Add("Argo");
        carros.Add("HRV");

        //carros2.AddRange(carros); //Copia os elementos da de outra List;

        //carros.Clear(); //Limpa todos os elementos da List
        if(carros.Contains("Golf")){ //Verifica se o elemento existe, Retorna TRUE / FALSE;
            Console.WriteLine("Esta na lista");
        }else{
            Console.WriteLine("Nao encontrado");
        }

        carros.CopyTo(carros2, 2);

        carros.Insert(1, "Cruze"); //Insere o elemento na posição informada;

        int pos2 = carros.LastIndexOf("HRV"); // Retorna a posição do último elemento pesquisado;

        //carros.RemoveAt(0); // Remove o elemento na posição indicada;

        /*if(carros.Remove("Argo")){ // Remove o elemento;
            Console.WriteLine("Argo removido");
        }else{
            Console.WriteLine("Argo NAO removido");
        }*/

        //carros.Reverse(); // Inverte a lista;
        carros.Sort(); //Faz a ordenação da List;

        int tamanho = carros.Count; //Diz o tamanho da List
        carros.Capacity = 15;
        int cap = carros.Capacity; //Capacidade da List;

        Console.WriteLine("Tamanho {0}", tamanho);
        Console.WriteLine("Capacidade {0}", cap);

        foreach(string c in carros){
            Console.WriteLine("Carro: {0}", c);
        }

        string ca = "HRV";
        int pos = 0;
        pos = carros.IndexOf(ca); //Retorna a primeira ocorrencia do elemento;
        Console.WriteLine("Carro {0} esta na posicao {1}", ca, pos);
        Console.WriteLine("Ultimo HRV esta na posicao {0}", pos2);

    }
}