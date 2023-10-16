#include <iostream>

using namespace std;

void imp(string txt="");/*Aqui não imprime nada*/

int main (){

	imp("OnePiece"); /*Aqui imprime o que foi escrito*/

	return 0;

}

void imp(string txt){
    cout << "\n" << txt << "\n";
}
