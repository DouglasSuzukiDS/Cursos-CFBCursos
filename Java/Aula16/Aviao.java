package Aula16;
// Aula 15 - Entendendo Super

import Aula16.veiculos.Veiculo;

public class Aviao extends Veiculo {
   private int categoria;

   public Aviao(String nome, int categoria) {
      super(nome, 10);
      this.categoria = categoria;
   }

   public void info() {
      super.info();

      System.out.printf("Categoria ...: %s%n", this.categoria);
   }
}
