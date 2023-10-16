using System;
//Namespaces: Controla o escopo, organiza os elementos;
namespace Calc1{
    class Area{
        public static float Quad(float bas, float alt){
            if(bas == 0 || alt == 0){
                throw new Exception("Base ou Altura, não podem ser igual a 0");
            }
            return bas * alt;
        }
    }
}

namespace Calc2{
    class Area{
        public static float Quad(float bas, float alt){
            if(bas == 0 || alt == 0){
                throw new Exception("Base ou Altura, não podem ser igual a 0");
            }
            return bas * alt;
        }
    }
}

class Aula54{
    static void Main(){

        float area = 0;

        try{
            area = Calc1.Area.Quad(0F, 5F);
            Console.WriteLine("Area do quad.: {0}",  area);
        }catch(Exception e){
            Console.WriteLine("ERRO: {0}", e.Message);
        }finally{
            Console.WriteLine("Fim do Processo");
        }
    }
}