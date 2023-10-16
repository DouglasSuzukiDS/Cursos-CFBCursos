#include <iostream>
#include <fstream>
#include <cstdlib>

using namespace std;

int main (){

	fstream arquivo;
	char opc='s';
	string nome,linha;

    arquivo.open("cfbcursos2.txt",ios::out|ios::app); //Aqui o arquivo entra

	while((opc=='s')or(opc=='S')){
	    cout << "Digite um nome: ";
	    cin >> nome;
	    arquivo << nome << "\n";
        cout << "\nDigitar um novo nome?[s/n]";
        cin >> opc;
        system("cls");
	}
	arquivo.close();

	arquivo.open("cfbcursos2.txt",ios::in); //Aqui o arquivo sai

	cout << "Nomes digitados: " << endl;

	if(arquivo.is_open()){
        while(getline(arquivo,linha)){
            cout << linha << endl;
        }
        arquivo.close();
	}else{
        cout << "Nao foi posivel abrir o arquivo" << endl;
	}

	return 0;

}
