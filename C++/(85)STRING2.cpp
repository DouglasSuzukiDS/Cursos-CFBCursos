#include <iostream>
#include <string>

using namespace std;

int main (){

    /* AT = Imprime o caractere selecionado ou a string completa
        BACK = Ultimo elemento
        FRONT = Primeiro elemento
        APPEND = Acrescenta o termo na string assim como o +=
        ASSIGN = Faz a substituição do conteudo
        REPLACE = Substitui parte da string
    */

   /* string txt("CFB Cursos - Cursos de C++ - Serie sobre Bibliotecas - www.youtube.com/cfbcursos");
    int tam=txt.size();

    txt.back()='B';
    cout << txt << endl;*/
    //cout << txt.back();

    /*for(int i=0;i<tam;i++){
        cout << txt.at(i);
    }*/

    string txt("CFB Cursos - Cursos de C++");
    string txt2="JavaScript";

    //txt+=" - Cursos de de C++"; //Assim acrescenta conteudo na string
    //txt.append(" - Cursos de C++");
    //txt.assign(" - Cursos de de C++");

    //txt.insert(10," - "); //Insere o elemento na posição selecionada

    //txt.erase(10,5); //remove o elemento da posição

    txt.replace(23,4,txt2);

    //txt.push_back('B'); //Acrescenta apenas1 caractere
    //txt.pop_back() //|Remove o ultimo elemento

    cout << txt << endl;

	return 0;

}
