#include <iostream>

using namespace std;

int main (){
    inicio:
    int numero, informado=1, fatoral=1;
    char res,S,s;

    cout << " Digite o numero a ser fatoriado: " << "\n";
    cin >> numero;

    while (informado <= numero){        //1 <= 5       2 <= 5     3 <=5      4 <= 5
        fatoral=fatoral*informado;      //fat = 1*5    5 = 5*2    10=10*3    30=30*40
        informado=++informado;          //fat=5        fat=10     fat=30     fat=120
        }
    cout << " O farotial de " << numero << " e: " << fatoral <<"\n";

    cout << "\n Deseja fazer uma nova pesquisa? (s/n)" << "\n";
    cin >> res;
    if (res=='S' or res=='s'){
        goto inicio;}

	return 0;

}
