#include <iostream>

using namespace std;

int main (){
        // * Ponteiro armazena o endere�o de uma Variavel do mesmo tipo
        // & � o endere�o
	string veiculo="Carro";
    string *pv;  //O ponteiro � o *

    pv=&veiculo; //Ponteiro PV recebe o endere�o da variavel veiculo

	cout << pv << "\n" << &veiculo;

	*pv="Moto"; //No endere�o apontado por *pv adicione o valor "Moto"

	cout << "\n" << veiculo << "\n" << *pv;

	return 0;

}
