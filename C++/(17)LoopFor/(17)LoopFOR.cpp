#include <iostream>

using namespace std;

int main (){

	/*
        for(inicio; condição; incremento/decremento){
            //comandos
        }
	*/

	int x;
	//for(int tmp =0; tmp < 1000000000 ; tmp++); //Usado para atrasar a execução de comandos;
	for (x=0; x<=10; x++){
        cout << x << "\n";
	}

	/*int x,y;
	for(x=0,y=1 ; x<=10 ; x++,y+=2){
        cout << x << " - " << y << "\n";
	}*/

	/*int x,y,z;
	//for(x=0,y=1,z=0 ; x<=10; x++,y+=2,z+=2){
    for(x=0,y=1,z=0 ; x<=10 && z<=6; x++,y+=2,z+=2){
        cout << x << " - ";
        cout << y << " - ";
        cout << z << "\n";
	}*/

	return 0;

}
