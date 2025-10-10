// Aula 52 - Classe Math
public class Aula52 {
   public static void main(String[] args) {
      int res, n1, n2, min, max, abs;
      double sqrt, random;

      n1 = 10;
      n2 = 5;

      min = Math.min(n1, n2);
      max = Math.max(n1, n2);
      sqrt = Math.sqrt(n1); // raiz quadrada
      abs = Math.abs(-20); // valor absoluto
      random = Math.random() * 101;

      System.out.print("Mínimo: " + min);
      System.out.println("Máximo: " + max);
      System.out.println("Raiz quadrada: " + sqrt);
      System.out.println("Valor absoluto: " + abs);
      System.out.println("Número aleatório: " + (int) random); // Ja converte pra inteiro
   }
}
