#include <iostream>

using namespace std;

void texto();
void soma(int n1, int n2);
int soma2(int n1, int n2);
void tr(string tra[4]);

int main (){

    /*for( int i=0; i < 10; i++){
        texto();
    }*/

    int res;
    string transp[4]={"carro", "moto", "barco", "aviao"};

    soma(7,3); //Fun��o 1
    res=soma2(175,25); // Fun��o 2

    cout << " Valor de res: " << res << "\n"; //Fun��o 3

    tr(transp);

	return 0;
}

void texto(){
    cout << "OnePiece\n";
}

void soma(int n1, int n2){
    cout << " Soma dos Valores: " << n1 + n2 << "\n";
}

int soma2(int n1, int n2){
    return n1+n2;
}

void tr(string tra[4]){
    for (int i=0; i<4; i++){
        cout << tra[i] << "\n";
    }
}
