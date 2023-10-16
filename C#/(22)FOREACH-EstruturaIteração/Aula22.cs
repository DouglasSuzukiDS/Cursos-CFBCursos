using System;
class Aula22{
    static void Main(){

        int[] num = new int[5]{11,22,33,44,55};

        for(int i = 0; i < num.Length; i++){
            //Console.WriteLine(num[i]);
            num[i] = 0;
        }

        foreach(int n in num){ //Recebe cada elemento do Array, Armazena na variavel, e executa os comandos
            Console.WriteLine(n);
        }
    }
}