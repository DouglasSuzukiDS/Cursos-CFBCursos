// Aula 37 - Tratamento de Erros com Try Catch Finally

import java.util.ArrayList;

public class Aula37 {
   public static void main(String[] args) {
      ArrayList<String> carros = new ArrayList<>();

      carros.add("HRV");
      carros.add("Polo");
      carros.add("Cruze");
      carros.add("Argo");
      carros.add("Fusion");

      try {
         System.out.println(carros.get(10));
      } catch (Exception e) {
         System.out.println("Erro");
         System.out.println(e.getMessage());
      } finally {
         System.out.println("Fim do Try");
      }
   }
}
