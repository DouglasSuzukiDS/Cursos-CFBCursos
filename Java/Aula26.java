package Aulas;
import java.util.Scanner;

public class Aula26 {
   public static void main(String[] args) {
      Scanner scan = new Scanner(System.in);

      final int numPerguntas = 5;

      int pontoQuestao = 2;

      char[] gabarito = { 'a', 'c', 'b', 'a', 'c' };

      String[] pergutas = {
            "Qual a maior estrela do nosso sistema Solar?",
            "Qual a primeira letra do nosso alfabeto?",
            "2x10 e igual a?",
            "O fantastico mudo de _____. (desenho anos 80)",
            "Valor de PI?"
      };

      String[] alternativas = {
            "a) Sol  |  b) Lua  |  c) Marte",
            "a) Z    |  b) C    |  c) A",
            "a) 10   |  b) 20   |  c) 12",
            "a) Bob  |  b) Carl |  c) Zec",
            "a) 3,16 |  b) 3    |  c) 3,14"
      };

      char[] respostas = new char[numPerguntas];
      char resp;
      int nota = 0;
      String aluno;

      System.out.println("Digite seu nome: ");
      aluno = scan.nextLine();

      for (int i = 0; i < numPerguntas; i++) {
         System.out.println("-------------");

         System.out.printf("Pergunta %d%n", i + 1);
         System.out.printf("%s%n", pergutas[i]);
         System.out.printf("%s%n", alternativas[i]);

         resp = scan.nextLine().charAt(0);
         respostas[i] = resp;
      }

      System.out.printf("%s%n", "Fim da prova, confira o resultado");

      for (int i = 0; i < numPerguntas; i++) {
         if (gabarito[i] == respostas[i]) {
            nota += pontoQuestao;
         }
      }

      System.out.printf("%s sua nota foi %d, você foi %s", aluno, nota, nota >= 6 ? "Aprovado" : "Reprovado");

   }
}
