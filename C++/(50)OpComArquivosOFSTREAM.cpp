#include <iostream>
#include <fstream>

using namespace std;

int main (){

	//ofstream=Insere, ifstream=Ler, fstream

	ofstream arquivo;
                                             //sem o ios::app fica só o conteúdo escrito
    arquivo.open("cfbcursos.txt"/*,ios::app*/);  //com o ios::app o conteudo se escreve por completo

    arquivo << "CBF Cursos\n";
    arquivo << "Curso de C++\n";
    arquivo << "cfbcursos.com.br\n";
    arquivo << "youtube.com/cfbcursos\n";

    arquivo.close();

	return 0;

}
