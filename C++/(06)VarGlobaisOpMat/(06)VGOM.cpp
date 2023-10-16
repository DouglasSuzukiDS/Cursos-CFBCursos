#include <iostream>
using namespace std;

int n1,n2; //Variaveis Globais

int main(){

    // Variaveis globais, locais e operadores matematico;

	//Operações Matematicos: + - / * % ()
	//% = Mod, resto da divisão*

	int n3,n4; //Variaves locais
	int res1, res2;

	n1=11;
	n2=3;
	n3=5;
	n4=2;

	res1=n1/n2;
	res2=n1%n2; 

	cout << " Devis: " << res1 << "\n\n";
	cout << " Resto: " << res2 << "\n\n" ;

	return 0;
}
