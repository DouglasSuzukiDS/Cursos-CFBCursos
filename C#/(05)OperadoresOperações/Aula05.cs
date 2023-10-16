using System;

class Aula05{

    static void Main(){
        //int res = (10+5)*2;
        //bool res = 10 > 5; 0 = //False | 1 = True
        // Console.WriteLine(res);

        //int num = 10;
        //num++; //num += 1; //num = num+1;
        //num *=2; // num = num +2; + - / *
        //Console.WriteLine(num);

        // & = AND / E => Retorna TRUE se TODAS as operações forem TRUE;
        // | = OR / OU => Apenas 1 operações ser TRUE, que retorna TRUE;

        bool res = (5 > 3) & (10 > 5) ;

        Console.WriteLine(res);
    }
}