// Aula 29 - Quantos parametros podem ser passados para uma mesma função
public class Aula29 {
   public static void main(String[] args) {
      int res = soma(10, 5);

      System.out.printf("Soma 01: %d", res);

      int[] valores = { 10, 5, 2, 3, 1, 9, 4 };
      int res2 = soma2(valores);

      System.out.printf("%nSoma 02: %d", res2);

      int res3 = soma3(10, 5, 2);

      System.out.printf("%nSoma 03: %d", res3);

   }

   public static int soma(int n1, int n2) {
      return n1 + n2;
   }

   public static int soma2(int[] n) {
      int res = 0;

      for (int v : n) {
         res += v;
      }

      return res;
   }

   // Une todos os paramentros em um array
   public static int soma3(int... n) {
      int res = 0;

      for (int v : n) {
         res += v;
      }

      return res;
   }
}
