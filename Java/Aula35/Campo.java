// Aula 35 - Como criar um Jogo da Velha - Parte 03

public class Campo {
   private char simbolo;

   public Campo() {
      this.simbolo = ' ';
   }

   public char getSimbolo() {
      return this.simbolo;
   }

   public void setSimbolo(char simbolo) {
      if (this.simbolo == ' ') {
         this.simbolo = simbolo;
      } else {
         System.out.printf("Campo já usado");
      }
   }
}
