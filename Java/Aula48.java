// Aula 48 - Aprendendo sobre a coleção HashMap, do tipo chave valor [HashMap]

import java.util.HashMap;

public class Aula48 {
   public static void main(String[] args) {
      HashMap<Integer, String> carros = new HashMap<Integer, String>();

      carros.put(1, "Polo");
      carros.put(2, "HRV");
      carros.put(3, "Golf");
      carros.put(4, "Camaro");
      carros.put(5, "Mustang");
      carros.put(6, "Cruze");

      System.out.println(carros);

      carros.remove(5);
      carros.clear();
      // System.out.println(carros.get(1));

      // for (int i = 1; i <= carros.size(); i++) {
      // System.out.println(carros.get(i));
      // }

      for (String c : carros.values()) {
         System.out.println(c);
      }
   }
}
