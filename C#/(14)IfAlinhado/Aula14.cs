using System;
class Aula12
{
    static void Main()
    {
        //SE(E_L){}
        // > < >= <= == !=
        //10 > 5 = TRUE
        int n1, n2, n3, n4, res;
        res = n1 = n2 = n3 = n4 = 0;
        string resultado;

        Console.Write("Digite a nota 1: ");
        n1 = int.Parse(Console.ReadLine());

        Console.Write("Digite a nota 2: ");
        n2 = int.Parse(Console.ReadLine());

        Console.Write("Digite a nota 3: ");
        n3 = int.Parse(Console.ReadLine());

        Console.Write("Digite a nota 4: ");
        n4 = int.Parse(Console.ReadLine());

        res = n1 + n2 + n3 + n4;
        // >=60 - Aprovado
        // 59 e 40 - Recuperação
        // <40 - Recuperação

        if (res >= 60){
            if(res >= 90){
                if(res >= 99){
                    resultado = "Aprovado com Super Louvor";
                }else{
                    resultado = "Aprovado com Louvor";
                }
            }else{
                resultado = "Aprovado";
            }
        }else{
            if(res >= 40){
                resultado = "Recuperação";
            }else{
                resultado = "Reprovado";
            }
        }

        Console.WriteLine("Nota: {0} - Resultado: {1}", res, resultado);
    }
}