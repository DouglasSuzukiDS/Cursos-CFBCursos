// Aula 41 - Metodos para comparação de Strings - Parte 03
public class Aula41 {
   public static void main(String[] args) {
      String s1 = "CFB Cursos - Curso de Java - ";
      String s2 = "youtube.com/cfbcursos";

      System.out.printf(s1);

      System.out.println();

      if (s1.startsWith("C")) {
         System.out.printf("Verdadeiro");
      } else {
         System.out.printf("Falso");
      }

      System.out.println();

      if (s1.endsWith("Java")) {
         System.out.printf("Verdadeiro");
      } else {
         System.out.printf("Falso");
      }

      System.out.println();

      System.out.println(s1.indexOf('C', 1));

      System.out.println(s1.substring(4, 18));

      System.out.println(s1.concat(s2));
   }
}
