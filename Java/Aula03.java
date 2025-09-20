// Aula 03 - Comando de Decisão em Java
public class Aula03 {
   public static void main(String[] args) {
      int nota = 85;
      int media = 60;
      int faltas = 10;
      int maxFaltas = 5;
      String resultado;

      int pos = 7;

      if (nota >= media && faltas <= maxFaltas) {
         System.out.println("Aprovado");
      } else if (nota >= 40) {
         System.out.println("Recuperação");
      } else {
         System.out.println("Reprovado");
      }

      resultado = (nota >= media ? "Aprovado" : "Reprovado");
      System.out.println("Resultado: " + resultado);

      switch (pos) {
         case 1:
            System.out.println("Primeiro lugar");
            break;
         case 2:
            System.out.println("Segundo lugar");
            break;
         case 3:
            System.out.println("Terceiro lugar");
            break;
         case 4:
         case 5:
         case 6:
            System.out.println("Premio de participação");
            break;
         default:
            System.out.println("Não ganhou premio");
            break;
      }

      System.out.println("Fim do Programa");
   }
}
