
// Aula 05 - Tipos de Loops em Java - For, While e Do While
import java.util.Scanner;

public class Aula05 {
   public static void main(String[] args) {
      Scanner scan = new Scanner(System.in);

      // For
      /*
       * for (int cont = 0; cont < 10; cont++) {
       * System.out.printf("%d - CFB Cursos\n", cont);
       * }
       */

      // While
      /*
       * int max = scan.nextInt();
       * int cont = 0;
       * while (cont < max) {
       * System.out.printf("%d - CFB Cursos\n", cont);
       * cont++;
       * }
       */

      // Do While
      int cont = 0;
      do {
         System.out.printf("%d - CFB Cursos\n", cont);
         cont++;
      } while (cont <= 0);
   }
}