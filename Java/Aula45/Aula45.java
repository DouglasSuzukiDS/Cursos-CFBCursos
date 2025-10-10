package Aula45;

// Aula 45 - Vamos aprender trabalhar com arquivos - Parte 03
import java.nio.file.*;

public class Aula45 {
   public static void main(String[] args) {
      Path logoNova = Paths.get("c:/Users/PATH/logoNova.jpg");
      Path logoAntiga = Paths.get("c:/Users/PATH/logoAntiga.jpg");

      try {
         byte[] bytesLogoNova = Files.readAllBytes(logoNova);
         Files.write(logoAntiga, bytesLogoNova);

      } catch (Exception e) {
         System.out.println("Ocorreu um erro ao ler o arquivo");
      }
   }
}
