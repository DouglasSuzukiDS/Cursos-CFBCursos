// Aula 46 - Stack, Pilha

import java.util.LinkedList;
import java.util.Queue;

public class Aula47 {
   public static void main(String[] args) {
      Queue<String> carros = new LinkedList<>();

      carros.add("HRV");
      carros.add("Golf");
      carros.add("Polo");
      carros.add("Camaro");
      carros.add("Tiggo 3X");

      System.out.println(carros);

      System.out.printf("Topo da fila: %s\n", carros.peek()); // Consulta o topo da fila sem remover

      System.out.printf("Topo da fila: %s\n", carros.poll()); // Consulta o topo da fila e remove

      // carros.clear(); // Limpa a fila

      System.out.println(carros.isEmpty() ? "Fila vazia" : "Fila com elementos");

      for (String C : carros) {
         System.out.println(C);
      }
   }
}
