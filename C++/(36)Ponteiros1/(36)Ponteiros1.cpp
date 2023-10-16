#include <iostream>

using namespace std;

int main (){
        // * Ponteiro armazena o endereço de uma Variavel do mesmo tipo
        // & é o endereço
	string veiculo="Carro";
    string *pv;  //O ponteiro é o *

    pv=&veiculo; //Ponteiro PV recebe o endereço da variavel veiculo

	cout << pv << "\n" << &veiculo;

	*pv="Moto"; //No endereço apontado por *pv adicione o valor "Moto"

	cout << "\n" << veiculo << "\n" << *pv;

	return 0;

}
