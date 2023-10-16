#include <iostream>
#include <cstdlib>
#include <ctime> //Para utilizar o TIME

using namespace std;

int main (){

	/*double num;
	char numero[80];

	cin >> numero;
	//num = atof(numero);        // converter todos de valores
	num = strtod(numero, NULL); //converter tipos de valores

	cout << num << endl;

	//atof atoi atol atoll(C++11);*/

	/*srand(time(NULL)); //Gera novos numeros
	for(int i=0;i<10;i++){
        cout << rand()%100 << endl;  //Rand gera numeros aleatorios, porem nao muda
	}*/

    /*calloc malloc // gerenciamento de memoria
    free //Libera a memria
    realloc*/ //Aumenta ou diminui o locamento da memoria

    int tam=10,num;
    int *vetor;

    //vetor*(int*)calloc(tam,sizeof(int));
    vetor=(int*)malloc(sizeof(int));

    srand(time(NULL));

    for(int i=0;i<tam;i++){
        vetor[i]=rand()%100;
        cout << vetor [i] << endl;
    }

    free(vetor); //Libera a memoria

	return 0;

}
