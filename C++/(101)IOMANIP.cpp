#include <iostream>
#include <iomanip>

using namespace std;

int main (){

	//setbase = base: decimal, hexadecimal, octal
    cout << setbase(8);
    cout << 10 << endl << endl;
	cout << setbase(10) << endl;

	//setw = Largura do campo
	cout << setw(20);
	cout << "CBF";
	cout << setw(10);
	cout << "Cursos";
	cout << setw(40);
	cout << "Curso de C++" << endl << endl;

	//setfill - Preenchimento do campo
	cout << "Canal:"<< setw(20) << setfill('.') << "CFB Curso" << endl << endl;

	//setprecision = Precisão dos valores float e double, casas decimais
	double pi=3.14159;
	cout << setprecision(3) << pi << endl << endl;

	return 0;

}
