package Aula15;

import Aula15.veiculos.Veiculo;

// Aula 15 - Protected
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
