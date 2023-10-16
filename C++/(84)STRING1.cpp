#include <iostream>
#include <string>

using namespace std;

int main (){


    string txt("CFB Cursos - Cursos de C++ - Serie sobre Bibliotecas - www.youtube.com/cfbcursos");
    string::iterator it;

    //it=txt.begin(); //Começo
    it=txt.end()-1; //Assim imprime o ultimo caractere

    //cout << *it << endl;
    //cout << txt << endl;

    //cout << txt.length() << endl;
    /*cout << txt.size() << endl;
    txt.resize(10);
    //cout << txt.max_size() << endl; //Tamanho maximo que uma string pode ter
    cout << txt.size() << endl; //
    cout << txt.capacity() << endl; //Valor da capacidade da string*/

    /*txt.clear(); //Limpa a string

    if(txt.empty()){  //Verifica qse a string estiver vaziaou não
        cout << "String vazia" << endl;
    }else{
        cout << txt << endl;
    }*/

    cout << txt << endl;
    cout << txt.capacity() << endl;
    txt.resize(25);
    txt.shrink_to_fit();  //Reduz a string para o numero de caractere
    cout << txt << endl;
    cout << txt.capacity() << endl;

	return 0;

}
