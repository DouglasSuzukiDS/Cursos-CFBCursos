package Aulas;

// Aula 30 - Métodos que irão facilidar sua vida ao trabalhar com Arrays
import java.util.Arrays;

public class Aula30 {
   public static void main(String[] args) {
      // int[] num1 = { 9, 5, 0, 7, 4, 2, 6, 3, 1, 8 };
      int[] num1 = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
      int[] num2 = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
      int[] num3 = { 9, 5, 0, 7, 4, 2, 6, 3, 1, 8 };
      int[] num4 = { 10, 4, 7, 23, 4, 10, 8, 0, 4, 9 };
      int[] num5 = new int[10];

      // Arrays.sort(num); // Ordena

      // Arrays.fill(num2, 10); // Preenche com o valor

      // System.arraycopy(num, 0, num2, 0, num.length); // Copia de um array para
      // outro

      /*
       * System.out.printf("num1 igual num2: %s%n", Arrays.equals(num1, num2) ?
       * "Igual" : "Diferente");
       * 
       * System.out.printf("num1 igual num2: %s%n", Arrays.equals(num1, num3) ?
       * "Igual" : "Diferente");
       * 
       * System.out.printf("num1 igual num4: %s%n", Arrays.equals(num1, num4) ?
       * "Igual" : "Diferente");
       */

      int valor = 7;
      Arrays.sort(num4);
      int pos = Arrays.binarySearch(num4, valor); // Se escontrar retorna a posição, se nao retorna um valor negativo. O
                                                  // Array deve estar ordenado.

      System.out.printf("%d esta no array? %s - posicao: %d%n", valor, pos >= 0 ? "Sim" : "Nao", pos);

      // for (int n : num2) {
      // System.out.printf("%d - ", n);
      // }
   }
}
