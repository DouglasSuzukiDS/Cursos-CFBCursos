// Aula 18 - Interface => Tipo de classe que contem expecificações para outras classes
package Aula18;

public class Animal implements SerVivo {
   private Boolean vivo = true;

   public Animal() {
      this.vivo = true;
   }

   public void mover() {
   }

   public void comer(int massa) {
   }

   public void info() {
      System.out.printf("Vivo: %s", this.vivo ? "Sim" : "Não");
   }

}
