package Aula43;

// Aula 43 - Vamos aprender trabalhar com arquivos - Parte 01
import java.nio.file.*;

public class Aula43 {
   public static void main(String[] args) {
      Path diretorio = Paths.get("c:/Users/PATH/");
      Path arquivo = Paths.get("c:/Users/PATH/texto.txt");

      if (Files.isDirectory(diretorio)) {
         System.out.println("O diretório existe");
      } else {
         System.out.println("O diretório não existe");
      }

      if (Files.exists(arquivo)) {
         System.out.println("O arquivo existe");
      } else {
         System.out.println("O arquivo não existe");
      }
   }
}
