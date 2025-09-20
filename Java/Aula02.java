// Aula 02 - Comandos de impressao e primeira pratica com variavei
public class Aula02 {
   public static void main(String[] args) {
      int num = 100;
      String nome = "CFB Cursos";

      int n1 = 10;
      int n2 = 20;
      int n3 = 30;
      int res = n1 + n2 + n3;

      System.out.println("Hello, World!\n");
      System.out.print("CFB Cursos\n"); // Sem quebra de linha
      System.out.println("Curso de Java"); // Com quebra de linha
      System.out.printf("Canal: %s - Ano %d%n", "CFB Cursos", 2025);
      // %s => Espera uma string
      // %d => Espera um inteiro
      // %n => Quebra de linha
      System.out.printf("Valor da variável num: %d %n  Nome: %s", num, nome);
      System.out.printf("A soma entre %d, %d e %d é: %d", n1, n2, n3, res);
   }
}
