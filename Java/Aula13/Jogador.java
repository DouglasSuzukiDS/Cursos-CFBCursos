package Aula13;

// Aula 13 - Métodos e atributos STATIC
public class Jogador {
   private final int maxVidas = 3;

   private int num = 0;
   private int vidas = 1;

   static boolean alerta = false;
   static int qtdJogadores = 0;
   static int pontosJogador = 0;

   public Jogador(int num) {
      this.num = num;
      this.vidas = 1;
      // setVidas(3);
      qtdJogadores++;

      System.out.printf("Jogador %d criado!%n", num);
   }

   public int getVidas() {
      return this.vidas;
   }

   private void setVidas(int vidas) {
      if (vidas > maxVidas) {
         this.vidas = maxVidas;
      } else if (vidas < 0) {
         this.vidas = 0;
      } else {
         this.vidas = vidas;
      }
   }

   public void addVidas() {
      if (this.vidas < maxVidas) {
         this.vidas++;
      }
   }

   public void info() {
      System.out.printf("%nJogador: %d%n", this.num);
      System.out.printf("%nVidas: %d%n", this.vidas);
      System.out.printf("%nAlerta: %s%n", alerta ? "Sim" : "Não");
      System.out.printf("%nJogadores: %d%n", qtdJogadores);
      System.out.printf("%nPontos: %d%n", pontosJogador);
      System.out.printf("%n-------------%n");
   }

   static void pontos() {
      pontosJogador += 10;
   }
}
