#include <iostream>
#include <stdio.h> //para fun��o gets, ler o space de char
#include <stdlib.h> //Para fun��o malloc

using namespace std;

int main (){

	char *vnome;
           //TypeCast
    vnome = (char *) malloc(sizeof(char)/*+1*/);

	gets(vnome);

	cout << vnome;

    return 0;

}
