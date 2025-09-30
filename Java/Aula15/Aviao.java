// Aula 15 - Entendendo Super
package Aula15;

public class Aviao extends Veiculo {
   private int categoria;

   public Aviao(String nome, int categoria) {
      super(nome, 10); // Chama o construtor da superclasse
      this.categoria = categoria;
   }

   public void info() {
      super.info(); // Chama o método info() da superclasse
      System.out.printf("Nome ........: %s%n", this.getNome());
      System.out.printf("Categoria ...: %d%n", this.categoria);
   }
}
