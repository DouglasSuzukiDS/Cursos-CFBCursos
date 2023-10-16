#include <iostream>

using namespace std;

int main (){

	int cont;
	cont=0;
	while(cont < 1000){
        cout << cont  << "One Piece" << "\n";

        if(cont == 500){
            break;
        }
        cont++;
    }
	return 0;

}
