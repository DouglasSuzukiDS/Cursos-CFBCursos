// Aula 28 - Passagem por valor e por referencia
public class Aula28 {
   public static void main(String[] args) {
      int[] notas = { 10, 85, 62, 45, 98, 78, 88, 60, 67, 82 };
      int ap, rp;
      ap = rp = 0;

      // Passagem por valor, aqui o resultado sera 0
      conferirNotas(notas, ap, rp);

      System.out.printf("Aprovados: %d%n", ap);
      System.out.printf("Reprovados: %d%n", rp);

      System.out.printf("%n ---------- %n");

      // Passagem por referencia
      int[] resultado = { 0, 0 };

      conferirNotas2(notas, resultado);

      System.out.printf("Aprovados: %d%n", resultado[0]);
      System.out.printf("Reprovados: %d%n", resultado[1]);
   }

   public static void conferirNotas(int[] nt, int a, int r) {
      for (int n : nt) {
         if (n >= 60) {
            a++;
         } else {
            r++;
         }
      }
   }

   public static void conferirNotas2(int[] nt, int[] r) {
      for (int n : nt) {
         if (n >= 60) {
            r[0]++;
         } else {
            r[1]++;
         }
      }
   }
}
