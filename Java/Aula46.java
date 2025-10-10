// Aula 46 - Stack, Pilha

import java.util.Stack;

public class Aula46 {
   public static void main(String[] args) {
      Stack<String> carros = new Stack<>();

      carros.push("HRV");
      carros.push("Golf");
      carros.push("Polo");
      carros.push("Camaro");
      carros.push("Tiggo 3X");

      System.out.println(carros);

      System.out.printf("Topo da pilha: %s\n", carros.peek()); // Consulta o topo da pilha sem remover

      System.out.printf("Topo da pilha: %s\n", carros.pop()); // Consulta o topo da pilha e remove

      carros.clear(); // Limpa a pilha

      System.out.println(carros.empty() ? "Pilha vazia" : "Pilha com elementos");

      for (String C : carros) {
         System.out.println(C);
      }
   }
}
