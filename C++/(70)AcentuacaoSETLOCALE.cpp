#include <iostream>
#include <locale> //com ou sem .h  //Uso de alguns idiomas

using namespace std;

int main (){

	setlocale(LC_ALL,"portuguese");

	cout << " É possível escrever maçã " << endl;

	return 0;

}
