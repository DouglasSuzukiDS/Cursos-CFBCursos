// Aula 11 - Diferença sobre PUBLIC e PRIVATE

import Aula12.Jogador;

public class Aula11 {
   public static void main(String[] args) {
      int num = 0;

      Jogador j1 = new Jogador(num++);
      Jogador j2 = new Jogador(num++);
      Jogador j3 = new Jogador(num++);

      /*j1.num = 10;
      System.out.printf("%n Jogador 1: %d", j1.num);*/
   }
}