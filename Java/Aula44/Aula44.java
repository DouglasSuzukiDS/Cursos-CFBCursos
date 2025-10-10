package Aula44;

// Aula 44 - Vamos aprender trabalhar com arquivos - Parte 02
import java.nio.file.*;
import java.util.List;

public class Aula44 {
   public static void main(String[] args) {
      Path arquivo = Paths.get("c:/Users/PATH/texto.txt");

      try {
         List<String> linhas = Files.readAllLines(arquivo);

         /*
          * for(String linha : linhas) {
          * System.out.println(linha);
          * }
          */

         linhas.forEach(linha -> System.out.println(linha));
      } catch (Exception e) {
         System.out.println("Ocorreu um erro ao ler o arquivo");
      }
   }
}
