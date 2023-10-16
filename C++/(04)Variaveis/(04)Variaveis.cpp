#include <iostream>

using namespace std;

int main(){
	
	//tipo nome;
	//tipo nome = valor;
	
	int vidas=0; //10, 25
	char letra='B'; //'B'
	//char letras[20];
	double decimal=5.2; //2.499999
	float decimal2=5.2; //2.5
	bool vivo=true; //true = verdadeiro/1 || false = Falso/0
	string nome="OnePiece"; //"OnePiece"
	
	cout << " Digite o numero de vidas: ";
	cin >> vidas;
	cout << " Digite uma letra: ";
	cin >> letra;
	cout << " Dinheiro: ";
	cin >> decimal ;
	cout << " Digite seu nome: " ;
	cin >> nome ;
	
	//vidas=100;
	
	cout <<"\nVidas: " << vidas << "\nLetra: " << letra << "\nDinehiro: " << decimal << "\n" << vivo << "\n" << nome  << "\n";
	
	return 0;
}
