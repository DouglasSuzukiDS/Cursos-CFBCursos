// Aula 25 - Como criar Array de tipo personalizado
package Aula25;

public class Aula25 {
   public static void main(String[] args) {
      final int numCarros = 5;
      Carro[] carros = new Carro[numCarros];
      String[] modelosCarros = { "HRV", "Golf", "Camaro", "Mustang", "Toro" };

      /*
       * carros[0] = new Carro("HRV");
       * carros[1] = new Carro("Golf");
       * carros[2] = new Carro("Camaro");
       * carros[3] = new Carro("Mustang");
       * carros[4] = new Carro("Toro");
       * 
       * for (int i = 0; i < numCarros; i++) {
       * carros[i].info();
       * }
       */

      // Inicializar o array carros
      for (int i = 0; i < numCarros; i++) {
         carros[i] = new Carro(modelosCarros[i]);
      }

      // Imprimir carros
      for (Carro c : carros) {
         c.info();
      }
   }
}
