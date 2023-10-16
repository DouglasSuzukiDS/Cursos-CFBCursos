#include <iostream>
#include <string.h>
#include <stdlib.h>

using namespace std;

int main (int argc, char *argv[]){
    /*Int Argc = Guarda o número de parâmetros informados
    Char argv*[] = Armazena os argumentos; Ponteiro para uma Matriz de Ponteiros de Caracteres
    strcmp() = Faz comparação de duas Strings */

	//cout << argv[0] << "\n\n";
	if (argc > 1){
        if(!strcmp(argv[1], "sol")){
            cout << "Vou ao Clube.\n\n";
        }else if(!strcmp(argv[1], "nublado")){
            cout << "Vou ao cinema.\n\n";
        }else{
            cout << "Vou ficar em casa.\n\n";
        }
	}

	system("pause");

	return 0;

}
