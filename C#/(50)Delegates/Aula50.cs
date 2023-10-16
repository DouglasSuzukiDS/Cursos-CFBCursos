using System;

delegate int Op(int n1, int n2);

class Mat{
    public static int soma(int n1, int n2){
        return n1 + n2;
    }

    public static int mult(int n1, int n2){
        return n1 * n2;
    }
}

class Aula50{
    static void Main(){
        //Delegate: É um objeto que faz referência a um Método;

        int res;

        Op d1 = new Op(Mat.soma); //Aqui aponta pro metodo Soma

        res = d1(10,50);

        Console.WriteLine("Soma: {0}", res);

        d1 = new Op(Mat.mult); //Aqui aponta pro metodo Mult

        res = d1(10,50);

        Console.WriteLine("Multiplicação: {0}", res);
    }
}