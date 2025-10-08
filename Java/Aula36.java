// Aula 36 - ArrayList, um array especial e turbinado

import java.util.ArrayList;

public class Aula36 {
   public static void main(String[] args) {
      ArrayList<Integer> numeros = new ArrayList<>();
      ArrayList<String> carros = new ArrayList<>();

      /*
       * numeros.add(11);
       * numeros.add(22);
       * numeros.add(33);
       * 
       * for (int n : numeros) {
       * System.out.println(n);
       * }
       */

      carros.add("HRV");
      carros.add("Polo");
      carros.add("Cruze");
      carros.add(1, "Argo");
      carros.add(1, "Fusion");

      System.out.println(carros.indexOf("Polo")); // Retorna a posição do elemento ou -1 se ele não encontrar
      System.out.println(carros.remove("Fusion")); // Remove o elemento e retorna
      // true ou false
      System.out.println(carros.remove(2)); // Remove o elemento pelo index
      // carros.clear(); // Limpa o ArrayList

      carros.trimToSize(); // Reduz o tamanho do ArrayList ao número de elementos

      /*
       * for (String c : carros) {
       * System.out.println(c);
       * }
       */

      for (int i = 0; i < carros.size(); i++) {
         System.out.println(carros.get(i));
      }
   }
}