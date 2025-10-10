
// Aula 49 - Aprendendo sobre a coleção HashSet, do tipo valores únicos [HashSet]
import java.util.HashSet;

public class Aula49 {
   public static void main(String[] args) {
      HashSet<String> carros = new HashSet<String>();

      carros.add("HRV");
      carros.add("Polo");
      carros.add("Golf");
      carros.add("City");
      carros.add("Cruze");
      carros.add("Argo");
      carros.add("Ka");

      System.out.println(carros.add("Polo") ? "Sim" : "Não");
      System.out.println(carros.contains("Polo") ? "Sim" : "Não");
      carros.remove("Ka");
      System.out.println(carros);
   }
}