using System;

class Aula10{

    enum DiasSemana{Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sábado};

    static void Main(){

        //DiasSemana ds = DiasSemana.Domingo;
        //DiasSemana ds = (DiasSemana)3; // Aqui retorna o valor do Enum na posição

        int ds = (int)DiasSemana.Sexta; //Aqui retorna o valor do indice;

        Console.WriteLine(ds);
    }
}