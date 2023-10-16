using System;
class Aula24{
    static void Main(){
        //cfb();
        int v1, v2, r;
        v1 = Convert.ToInt32(Console.ReadLine());
        v2 = Convert.ToInt32(Console.ReadLine());
        r = soma(v1, v2);
        Console.WriteLine("A soma de {0} e {1} é: {2}", v1, v2, r);
    }

    /*static void cfb(){
        Console.WriteLine("CFB Cursos");
        Console.WriteLine("Curso de C#");
        Console.WriteLine("youtube.com/cfbcursos");
    }*/
    static int soma(int n1, int n2){
        int res = n1 + n2;
       
        return res;
    }
}