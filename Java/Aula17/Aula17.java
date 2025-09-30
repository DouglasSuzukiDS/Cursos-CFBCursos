// Aula 17 - Criando Calculadora com Orientação a Objetos
package Aula17;

import java.util.Scanner;

public class Aula17 {
   public static void main(String[] args) {
      Scanner scan = new Scanner(System.in);

      Numero n1 = new Numero();
      Numero n2 = new Numero();
      Numero res = new Numero();

      String opc = "S";

      while (opc.equals("s") || opc.equals("S")) {
         System.out.printf("Digite o valor 1: ");
         n1.setValor(scan.nextInt());

         System.out.printf("Digite o valor 2: ");
         n2.setValor(scan.nextInt());

         res.setValor(n1.getValor() + n2.getValor());

         System.out.printf("A soma de %d com %d é: %d\n", n1.getValor(), n2.getValor(), res.getValor());

         System.out.printf("\nDeseja somar outro valor?: ");
         opc = scan.next();

         System.out.printf("\n\n\n");

      }

   }

}
