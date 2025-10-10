// Aula 39 - Trabalhando com Strings - Parte 01
public class Aula39 {
   public static void main(String[] args) {
      char[] texto_c = { 'c', 'u', 'r', 's', 'o', ' ', 'd', 'e', ' ', 'j', 'a', 'v', 'a' };
      char[] texto_c2 = new char[10];
      String texto_s = new String("CFB Cursos");
      int tam;
      char c;

      String s1 = new String();
      String s2 = new String(texto_s);
      String s3 = new String(texto_c);
      String s4 = new String(texto_c, 0, 5);

      tam = texto_s.length();
      System.out.printf("Tamanho do texto: %d\n", tam);

      c = texto_s.charAt(2);
      System.out.printf("Caractere na posição 2: %c\n", c);

      texto_s.getChars(4, 10, texto_c2, 0);
      System.out.printf("Caracteres copiados: %s\n", new String(texto_c));
   }
}
