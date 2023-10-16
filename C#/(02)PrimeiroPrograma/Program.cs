using System;

namespace _02_PrimeiroPrograma /*Pasta de Origem e Armazenamento*/
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("CFB Cursos"); /* Quebra a linha no final do texto */
            if(args.GetLength(0)>0){ /* GetLength() = Tamanho do Argumento */
                Console.Write(args.GetValue(0)); /* GetValue() = Captura o elemento na posição */
            } 
        }
    }
}
