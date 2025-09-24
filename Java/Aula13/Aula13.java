package Aula13;
// Aula 13 - Métodos e atributos STATIC

public class Aula13 {
   public static void main(String[] args) {
      int num = 0;

      Jogador.pontos();
      Jogador.pontos();
      Jogador.pontos();

      System.out.printf("%nAlerta: %s%n", Jogador.alerta ? "Sim" : "Não");

      Jogador j1 = new Jogador(num++);
      Jogador j2 = new Jogador(num++);
      Jogador j3 = new Jogador(num++);

      Jogador.alerta = true;

      j1.info();
      j2.info();
      j3.info();

   }
}