
// Aula 07 - Métodos da Classe Array
import java.util.Arrays;
import java.util.Scanner;

public class Aula07 {
   public static void main(String[] args) {
      final int tam = 5;
      int[] num = { 9, 2, 7, 1, 8, 5, 3, 4, 0, 6 };
      int[] numeros = new int[tam];
      int p = 3;
      int pos;

      for (int i = 0; i < num.length; i++) {
         // System.out.printf("%d ", num[i]);
      }

      Arrays.sort(num); // Ordena o array
      // Arrays.fill(numeros, 10); // Preenche o array com o valor informado
      // System.arraycopy(num, 0, numeros, 0, tam); // Copia o array
      // Arrays.equals(num, numeros); // Compara os arrays, returnando true ou false

      System.out.printf("Arrays são igual: %s",
            Arrays.equals(num, numeros) ? "Sim" : "Não");

      pos = Arrays.binarySearch(num, p); // Pesquisa o elemento no array
      System.out.printf("O elemento %d está no array?: %s\n", p,
            pos > 0 ? "Sim" : "Não", pos);

      for (int n : numeros) {
         System.out.printf("\n%d ", n);
      }
   }
}
