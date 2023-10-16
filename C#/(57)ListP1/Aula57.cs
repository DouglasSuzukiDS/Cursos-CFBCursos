using System;
using System.Collections.Generic;
class Aula57{
    static void Main(){
        //List = Seria um "Array Tunado";
        List<string> carros = new List<string>();
        //List<string> carros2 = new List<string>();
        string[] carros2 = new string[10]; // Para o uso do CopyTo

        carros.Add("Golf"); //Adiciona elementos;
        carros.Add("HRV");
        carros.Add("Focus");
        carros.Add("Argo");

        //carros2.AddRange(carros); //Copia os elementos da de outra List;

        //carros.Clear(); //Limpa todos os elementos da List
        if(carros.Contains("Golf")){ //Verifica se o elemento existe, Retorna TRUE / FALSE;
            Console.WriteLine("Esta na lista");
        }else{
            Console.WriteLine("Nao encontrado");
        }

        carros.CopyTo(carros2, 2);

        foreach(string c in carros){
            Console.WriteLine("Carro: {0}", c);
        }

        string ca = "HRV";
        int pos = 0;
        pos = carros.IndexOf(ca); //Retorna a primeira ocorrencia do elemento;
        Console.WriteLine("Carro {0} esta na posicao {1}", ca, pos);

    }
}