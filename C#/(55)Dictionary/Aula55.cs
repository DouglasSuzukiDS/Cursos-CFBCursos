using System;
using System.Collections.Generic;
class Aula55{
    static void Main(){
        //Dictionary: Dupla de valores, formadas por key-value;
        Dictionary <int, string> veiculos = new Dictionary<int, string>();

        veiculos.Add(10, "Carro"); //Adiciona
        veiculos.Add(5, "Aviao"); 
        veiculos.Add(0, "Navio");
        veiculos.Add(20, "Moto");
        veiculos.Add(15, "Patinete");

        //veiculos.Clear(); // Limpa todo o Dictionary

        veiculos.Remove(20); // Remove a chave;

        Console.WriteLine("Tamanho do Dictionary: {0}", veiculos.Count); //Diz o tamanho do Dictionary
        int chave = 20;
        if(veiculos.ContainsKey(chave)){ //Verifica se tem a CHAVE no Dictionary, retornando TRUE / FALSE;
            Console.WriteLine("A chave {0} esta na colecao", chave);
        }else{
            Console.WriteLine("A chave {0} NAO esta na colecao", chave);
        }

        veiculos[15] = "Bicicleta"; //Substitui a chave;

        string valor = "Bicicleta";
        if(veiculos.ContainsValue(valor)){ //Verifica se tem o VALOR no Dictionary, retornando TRUE / FALSE;
            Console.WriteLine("O valor {0} esta na colecao", valor);
        }else{
            Console.WriteLine("O valor {0} NAO esta na colecao", valor);
        }

        /*foreach(KeyValuePair<int, string> v in veiculos){ //Imprimir os Dictionary
            //Console.WriteLine(v.Value); // Imprime o valor;
            Console.WriteLine(v.Key); //Imprime a chave;
        }*/

        Dictionary<int, string>.ValueCollection valores =  veiculos.Values; //Pega todos os valores e armazena em um novo Dictionary

        foreach(string v in valores){ //Imprimir os Dictionary
            Console.WriteLine(v); //Imprime a chave;
        }

    }
}