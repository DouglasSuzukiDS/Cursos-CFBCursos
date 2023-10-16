using System;

class Calc{
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

    //5! = 5*4*3*2*1;
    public int fat(int n){ //Recursividade
        int res;
        if(n <= 1){
            res = 1;
        }else{
            res = n * fat(n - 1);
        }
        return res;
    }
}

class Aula48{
    static void Main(){

        Calc calc = new Calc();

        var res = calc.fat(10);

        Console.WriteLine(res);
    }
}