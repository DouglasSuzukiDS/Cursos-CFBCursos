// Aula 21 - Exercicio Classes - Parte 02
package Aula21;

public class Vegetal {
   private Boolean vivo;
   private int massa;

   public Vegetal(int massa) {
      this.vivo = true;
      this.massa = massa;
   }

   public int getMassa() {
      return this.massa;
   }

   public void setVivo(Boolean vivo) {
      this.vivo = vivo;
   }

   public void info() {
      System.out.printf("Tipo.. : %s%n", this.getClass().toGenericString());
      System.out.printf("Vivo.. : %s%n", this.vivo ? "Sim" : "Nao");
      System.out.printf("Massa. : %d%n", this.getMassa());
      System.out.println("---------------");
   }

}
