using System;
class Aula19{
    static void Main(){

        int[] num = new int[10];

        //for(int i = 0; i < 10; i++){
        for (int i = 0; i < num.Length; i++){ //Aqui não se precisa se preocupar com o tamanho do Array;
            //Console.WriteLine("Valor de num: {0}", num);
            num[i] = i;
        }

        for(int i = 0; i < 10; i++){
            Console.WriteLine("Valor de num na pos {0}: {1}", i, num[i]);
        }
    }
}