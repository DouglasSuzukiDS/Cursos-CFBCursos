#include <iostream> //Fluxo de Dados

using namespace std;

int main (){

	char n,s;

	//cin.getline(nome,80);  //Ler com todos caracteres com o terminador
	//cin.get(nome,80);        // Ler somente os caracteres
    //cout << nome << " - Tamanho: " << cin.gcount() << endl;

    n=cin.get();
    cin.ignore(80,' ');
    s=cin.get();
    cout << n << " - " << s << endl;

	return 0;

}
