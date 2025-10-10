// Aula 40 - Metodos para comparação de Strings - Parte 02
public class Aula40 {
   public static void main(String[] args) {
      String s1 = new String("Nick");
      String s2 = "nick";
      String s3 = "Curso de Java";
      String s4 = "CFB Cursos";
      String s5 = "CFB Curso de Java";
      String s6 = "Nick";

      System.out.printf("");

      // Verifica se são igual
      if (s1 == s2) {
         System.out.printf("s1 é igual a s2\n");
      } else {
         System.out.printf("s1 é diferente de s2\n");
      }

      // Verifica se são igual (Levando em conta letras maiusculas e minusculas)
      if (s1.equals(s2)) {
         System.out.printf("s1 é igual a s6\n");
      } else {
         System.out.printf("s1 é diferente de s6\n");
      }

      // Verifica se são igual (Ignorando letras maiusculas e minusculas)
      if (s1.equalsIgnoreCase(s2)) {
         System.out.printf("s1 é igual a s6\n");
      } else {
         System.out.printf("s1 é diferente de s6\n");
      }

      // compareTo => Retorna 0 se forem iguais, um valor negativo se a string for
      // menor que a outra e um valor positivo se a string for maior que a outra
      System.out.println(s3.compareTo(s1));

      // regionMatches => Compara parte de uma string com outra
      if (s4.regionMatches(true, 0, s5, 0, 10)) {
         System.out.printf("s4 é igual a s5\n");
      } else {
         System.out.printf("s4 é diferente de s5\n");
      }
   }
}
