// Aula 09 - Entendendo métodos 

public class Aula09 {
   public static void main(String[] args) {
      int r;

      canal();
      msg("CFB Cursos - Curso de Java", 3);

      r = soma(10, 5);
      System.out.printf("Resultado: %d\n", r);
      System.out.println(soma2(1, 5, 10, 3, 20, 2));
      System.out.println(soma3(2.5, 2.5));
   }

   public static void canal() {
      System.out.println("CFB Cursos");
   }

   public static void msg(String m, int l) {
      for (int i = 0; i < l; i++) {
         System.out.println(m);
      }
   }

   public static int soma(int n1, int n2) {
      int res = n1 + n2;

      return res;
   }

   public static int soma2(int... numeros) {
      int res = 0;

      for (int n : numeros) {
         res += n;
      }

      return res;
   }

   public static double soma3(Double... numeros) {
      Double res = 0.0;

      for (double n : numeros) {
         res += n;
      }

      return res;
   }
}
