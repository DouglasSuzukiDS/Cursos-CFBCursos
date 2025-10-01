// Aula 24 - Como criar e manipular Array
public class Aula24 {
   public static void main(String[] args) {
      final int tamanho = 7;
      int[] num = new int[tamanho];
      int[] num2 = { 52, 100, 3, 15, 527, 112, 79 };

      num[0] = 52;
      num[1] = 100;
      num[2] = 3;
      num[3] = 15;
      num[4] = 527;
      num[5] = 112;
      num[6] = 79;

      for (int i = 0; i < tamanho; i++) {
         // System.out.printf("%d%n", num[i]);
      }

      for (int n : num2) {
         System.out.printf("%d%n", n);
      }
   }
}
