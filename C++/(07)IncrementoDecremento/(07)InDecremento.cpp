#include <iostream>
using namespace std;

int main(){

    // Incremento e Decremento de Variáveis, Operadores pós e pré-fixados;

	//n1=n1+10;		n1+=10;
	//n1=n1-10;		n1-=10;
	//n1=n1*10;		n1*=10
	//n1=n1/10; 	n1/=10;
	//n1++;		    n1--;
	//n1++;		    ++n1;

	int n1=10;

	cout << n1-- << "\n\n";  //Aqui da 10
	cout << n1 << "\n\n";    // Aqui da 9 por conta do sinal de -

	return 0;
}
