// Aula 50 - Interator

import java.util.ArrayList;
import java.util.Iterator;

public class Aula50 {
   public static void main(String[] args) {
      ArrayList<String> carros = new ArrayList<String>();

      carros.add("HRV");
      carros.add("Polo");
      carros.add("Golf");
      carros.add("City");
      carros.add("Cruze");
      carros.add("Argo");
      carros.add("Ka");

      System.out.println(carros);

      Iterator<String> it = carros.iterator();

      // System.out.println(it.next());

      while (it.hasNext()) {
         String c = it.next();
         if (c == "Argo") {
            it.remove();
         }

         // System.out.println(it.next());
      }

      System.out.println(carros);
   }
}
