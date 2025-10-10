// Aula 42 - Metodos da classe String - Parte 04
public class Aula42 {
   public static void main(String[] args) {
      String s1 = "CFB Cursos - Curso de Java - ";
      String s2 = "youtube.com/cfbcursos";
      String s3 = s1.concat(s2);
      String s4;

      System.out.printf(s3);

      s4 = s3.replace("C", "@");
      System.out.printf("%s%n", s4);

      System.out.printf("%s%n", s3.toLowerCase());
      System.out.printf("%s%n", s3.toUpperCase());

      System.out.printf("%s%n", s3.trim()); // Remove os espaçõs no começo e no fim

      char[] c = s3.toCharArray();
      System.out.printf("%s%n", c);

      String[] s5 = s3.split(" ");
      for (String s : s5) {
         System.out.printf("%s%n", s);
      }
   }
}