using System;
class Aula20{
    static void Main(){

        int[] num = new int[10];

        int i = num.Length-1;
        // while(i < num.Length){
        while (i > 0){
            num[1] = 0;
            Console.WriteLine(num[i]);
            i--;
        }
        Console.WriteLine("Fim do Loop");
    }
}