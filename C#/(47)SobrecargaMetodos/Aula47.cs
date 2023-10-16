using System;

class Calc{

    /*public int soma(int n1, int n2){
        return n1 + n2;
    }*/

    /* Pode conter Metodos com os memsos nomes, desde tenham argumentos de entrada diferentes;
    public int soma(int n1, int n2, int n3){
        return n1 + n2 + n3;
    }

    public int soma(int n1, int n2, int n3, int n4){
        return n1 + n2 + n3 + n4;
    }*/

    /*public double soma(double n1, double n2){
        return n1 + n2;
    }*/

    public double soma(params int[]n){ //Params = Permite a entrada de diversos argumentos;
        int s = 0;
        for(int i = 0; i < n.Length; i++){ //Aqui percore os valores de entrada
            s += n[i];
        }
        return s;
    }
    public double soma(params double[]n){
        double s = 0;
        for(int i = 0; i < n.Length; i++){ //Aqui percore os valores de entrada
            s += n[i];
        }
        return s;
    }

}
class Aula47{
    static void Main(){

        Calc calc = new Calc();

        /*int res; 
        //res = calc.soma(10, 5);
        //res = calc.soma(10, 5, 3);*/

        /*double res;
        res = calc.soma(10.2, 5.4);*/
        //var res = calc.soma(10.2, 5.4); //Assim não precisa se preocupar com o tipo de retorno;

        //var res = calc.soma(10.2, 5.4, 3.1, 7.2, 8.1); //Com Params
        var res = calc.soma(1, 5, 10, 35); //Com Params

        Console.WriteLine(res);

    }
}