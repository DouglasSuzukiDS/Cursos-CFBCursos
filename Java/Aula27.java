package Aulas;
// Aula 27 - Passando Arrays como parametros para funçoes
public class Aula27 {
   public static void main(String[] args) {
      String nome = "Nick";

      for (char c : nome.toCharArray()) {
         System.out.printf("%c ", c);
      }

      int[] numero = { 10, 5, 15, 20, 100, 25, 14, 8, 3, 98, 75, 62
      };

      parImpar(numero);
   }

   public static void parImpar(int[] num) {
      for (int n : num) {
         /*if (n % 2 == 0) {
            System.out.printf("%d: %s%n", n, "Par");
         } else {
            System.out.printf("%d: %s%n", n, "Impar");
         }

         System.out.printf("%d\n", n);*/

         String res;
         if(n % 2 == 0) {
            res = "Par";
         } else {
            res = "Impar";
         }

         System.out.printf("%d: %s%n", n, res);
      }
   }
}
