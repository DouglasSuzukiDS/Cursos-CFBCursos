#include <iostream>
#include <fstream>

using namespace std;

int main (){

	/*ofstream arquivoS;  //S no final indica a o uso IFSTREAM=Leitura

    arquivo.open("cfbcursos.txt");

    arquivoS << "CBF Cursos\n";
    arquivoS << "Curso de C++\n";             //Arquino existente no PC, se não so inserir aqui
    arquivoS << "cfbcursos.com.br\n";
    arquivoS << "youtube.com/cfbcursos\n";

    arquivoS.close();*/

    ifstream arquivoE;
    string linha;
    arquivoE.open("cfbcursos.txt");
        if(arquivoE.is_open()){
            while(getline(arquivoE,linha)){
                cout << linha << endl;
            }
            arquivo.close();
    }else{
        cout << "Nao foi possivel abrir o arquivo" << endl;
    }

	return 0;

}
