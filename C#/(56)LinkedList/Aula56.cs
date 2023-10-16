using System;
using System.Collections.Generic;
class Aula56{
    static void Main(){
        //LinkedList / Lista Duplamente Encadeada = Cada elemento é um nó da lista, que tem um link pro elemento posterior e anterior;
        LinkedList<string> transp = new LinkedList<string>();

        transp.AddFirst("Carro"); //Insere no inicio;
        transp.AddFirst("Aviao");
        transp.AddFirst("Navio");
        transp.AddFirst("Motocicleta");

        transp.AddLast("Bicicleta"); // Insere no final;

        LinkedListNode<string> no;
        no = transp.FindLast("Navio"); //Encontra o último elemento;
        transp.AddAfter(no, "Patinete"); // Insere apos do elemento;
        no = transp.FindLast("Carro"); //Encontra o último elemento;
        transp.AddBefore(no, "Patins"); // Insere antes do elemento;

        //transp.Clear(); //Limpa tudo;

        if(transp.Find("Carro") == null){ //verifica se o elemento existe, retorna TRUE / NULL
            Console.WriteLine("Não encontrado");
        }else{
            Console.WriteLine("Elemento encontrado");
        }

        //transp.Remove("Navio"); // Remove o elemento;
        transp.RemoveFirst(); //Remove o primeiro elemento;
        transp.RemoveLast(); //Remove o ultimo elemento;

        foreach(string t in transp){
            Console.WriteLine("Transporte: {0}", t);
        }


    }
}