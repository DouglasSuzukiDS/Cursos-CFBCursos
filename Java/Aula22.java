// Aula 22 - Switch Case
public class Aula22 {
   public static void main(String[] args) {
      int posicao = 1;
      int n1, n2, res;
      String op = "-";

      n1 = 10;
      n2 = 5;
      res = 0;

      int nota = 8;
      String status = "";

      switch (posicao) {
         case 1:
            System.out.printf("%s%n", "Medalha de Ouro");
            break;
         case 2:
            System.out.printf("%s%n", "Medalha de Prata");
            break;
         case 3:
            System.out.printf("%s%n", "Medalha de Bronze");
            break;
         default:
            System.out.printf("%s%n", "Continue participando");
            break;
      }

      switch (op) {
         case "+":
            res = n1 + n2;

            // System.out.printf("%d + %d = %d%n", n1, n2, res);
            break;
         case "-":
            res = n1 - n2;

            // System.out.printf("%d - %d = %d%n", n1, n2, res);
            break;
         case "*":
            res = n1 * n2;

            // System.out.printf("%d * %d = %d%n", n1, n2, res);
            break;
         case "/":
            res = n1 / n2;

            // System.out.printf("%d / %d = %d%n", n1, n2, res);
            break;
         default:
            System.out.printf("%s%n", "Operacao invalida");
            break;
      }

      System.out.printf("Operação: %s Resultado: %d%n", op, res);

      switch (nota) {
         case 10:
         case 9:
         case 8:
         case 7:
            status = "Aprovado";
            break;
         case 6:
         case 5:
         case 4:
            status = "Recuperação";
            break;
         case 3:
         case 2:
         case 1:
         case 0:
            status = "Reprovado";
            break;
         default:
            status = "Nota inválida";
            break;
      }

      System.out.printf("Status: %s%n", status);
   }
}
