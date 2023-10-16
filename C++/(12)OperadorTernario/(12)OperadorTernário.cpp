#include <iostream>

using namespace std;

int main (){

	//(expressão) ?(se)	valor1 : Valor2;

	/*int n1, n2, nota;
	string res;

	cout << " Digite a Primeira Nota: ";
	cin >> n1;
	cout << " Digite a Segunda Nota: ";
	cin >> n2;

	nota=n1+n2; */

	// >=60 Aprovado
	// <60 Reprovado

	//(nota >=60) ? res="Aprovado" : res="Reprovado";
   // res=(nota >=60) ? "Aprovado" : "Reprovado";
	//cout << "\nSituacao do Aluno: " << res << "\n";

	int n1, x;
	x=5;

	cout << "Digite um Valor: ";
	cin >> n1;

	(n1 >=10) ? x++ : x--;
	cout << "\nNovo valor de X: " << x << "\n";

	return 0;

}
