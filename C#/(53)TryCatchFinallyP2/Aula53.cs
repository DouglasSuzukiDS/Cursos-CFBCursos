using System;

class Area{
    public static float Quad(float bas, float alt){
        if(bas == 0 || alt == 0){
            throw new Exception("Base ou Altura, não podem ser igual a 0");
        }
        return bas * alt;
    }
}
class Aula53{
    static void Main(){

        /*int n1, n2, res;
        res = n1 = n2 = 0;

        n1 = 10;
        n2 = 5;

        try{
            res = n1/n2;
            Console.WriteLine("{0} / {1} = {2}", n1,n2, res);
            throw new Exception("CFB Cursos"); //Gera um Exceção
        }catch(Exception e){ //Exception Pai de todos os Erros
            Console.WriteLine("ERRO: {0}", e.Message); //Mostra a mensagem do Erro
            Console.WriteLine("Ex: {0}", e); //Mostra a mensagem de erro no sistema e o erro
            Console.WriteLine("Ex: {0}", e.GetType()); //Mostra o tipo do erro
        }finally{ //Executado independente se foi gerado excessão ou não
            Console.WriteLine("Fim do Processo");
        }*/

        float area = 0;

        try{
            area = Area.Quad(0F, 5F);
            Console.WriteLine("Area do quad.: {0}",  area);
        }catch(Exception e){
            Console.WriteLine("ERRO: {0}", e.Message);
        }finally{
            Console.WriteLine("Fim do Processo");
        }

    }
}