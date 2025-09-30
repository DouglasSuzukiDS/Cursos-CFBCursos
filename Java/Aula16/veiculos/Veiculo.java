package Aula16.veiculos;

// Aula 16 - Protected

public class Veiculo {
   protected String nome;
   protected int tipo;

   // Protected: Permite acesso as instancias e a arquivos que estão no mesmo
   // pacote
   public Veiculo(String nome, int tipo) {
      this.nome = nome;
      this.tipo = tipo;
   }

   public String getNome() {
      return this.nome;
   }

   public void info() {
      System.out.printf("Nome ........: %s%n", this.nome);
      System.out.printf("Tipo ........: %d%n", this.tipo);
   }
}
