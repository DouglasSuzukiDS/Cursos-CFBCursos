#include <iostream>
#include <string>

using namespace std;

int main (){

    /* FIND = Encontra determinada ocorrencia
        SUBSTR = Retorna uma nova string de acordo com a posição de uma posição indicada de uma string existente
        Compare = Compara duas strings 0 = Iguais; >0 = 1 maior 2 DIFERENTES; <0 = 2 maior 1 DIFERENTES
        STOI = Transforma String para Inteiro
        TO_STRING = Converte numeral para string
        STOF = String para Fload
        STOD = String para Double
    */
    string txt1("Curso de C++ - Biblioteca String");
    string txt2;
    string txt3("18"),txt4;
    int ano=2018,res;

    /*size_t encontrado=txt1.find("rin");

    if(encontrado!=string::npos){
        cout << "Encontrado na posicao " << encontrado << endl;
    }else{
        cout << "NAO encontrado" << endl;
    }*/

    /*txt2=txt1.substr(15,10); //Ponto inicial, e o numero de caracteres

    cout << txt2 << endl;*/

    /*if(txt1.compare(txt2)==0){
        cout << "String iguais" << endl;
    }else{
        cout << "Strings diferentes" << endl;
    }*/

    res=ano-stoi(txt3);
    //cout << res << endl;

    txt4=to_string(res);
    cout << txt4 << endl;



	return 0;

}
