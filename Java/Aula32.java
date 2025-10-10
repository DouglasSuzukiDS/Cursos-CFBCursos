package Aulas;
// Aula 32 - Aprendendo sobrea Matrizes

import java.security.SecureRandom;

public class Aula32 {
   public static void main(String[] args) {
      final int linha = 3;
      final int coluna = 5;
      int[][] numeros = new int[linha][coluna];

      /*for (int l = 0; l < linha; l++) {
         for (int c = 0; c < coluna; c++) {
            numeros[l][c] = new SecureRandom().nextInt(100);
         }
      }

      for (int l = 0; l < linha; l++) {
         for (int c = 0; c < coluna; c++) {
            System.out.printf("%d - ", numeros[l][c]);
         }
         System.out.printf("%n");
      }*/

      geraDados(numeros, linha, coluna);
      impDados(numeros, linha, coluna);
   }

    public static void geraDados(int[][] mtz, int linhas, int colunas) {
      for (int i = 0; i < linhas; i++) {
         for (int j = 0; j < colunas; j++) {
            mtz[i][j] = new SecureRandom().nextInt(100);
         }
         System.out.printf("%n");
      }
   }

   public static void impDados(int[][] mtz, int linhas, int colunas) {
      for (int i = 0; i < linhas; i++) {
         for (int j = 0; j < colunas; j++) {
            System.out.printf("%d - ", mtz[i][j]);
         }
         System.out.printf("%n");
      }
   }
}
