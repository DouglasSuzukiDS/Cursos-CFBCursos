using System;
class Aula52{
    static void Main(){

        int n1, n2, res;
        res = n1 = n2 = 0;

        n1 = 10;
        n2 = 0;

        try{
            res = n1/n2;
            Console.WriteLine("{0} / {1} = {2}", n1,n2, res);
        }catch(Exception e){ //Exception Pai de todos os Erros
            Console.WriteLine("ERRO: {0}", e.Message); //Mostra a mensagem do Erro
            Console.WriteLine("Ex: {0}", e); //Mostra a mensagem de erro no sistema e o erro
            Console.WriteLine("Ex: {0}", e.GetType()); //Mostra o tipo do erro
        }

    }
}