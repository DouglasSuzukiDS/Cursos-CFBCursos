#include <iostream>
#include <stdio.h>
#include <math.h> //Biblioteca matematica
#include <iomanip> //Manipula��o ENT/SAI

using namespace std;

int main (){

    int num1=10;
    float pi=M_PI;
    //printf("Valor de PI: %.2f",pi); //.N = Numero de casas decimais;
    int num2=30;


    //printf("Valor de PI: %07.1f",num1); //0+N e o N de digito, com 0; O ponto(.) � as casas decimais que deseja
    cout.precision(30); //casas decimais em ()

    cout << "Valor de PI: " << pi << "\n";

    cout.precision(-1); //Volta ao normal

    cout << "Valor de PI: " << pi << "\n";
    cout << "Valor de PI: " << std::scientific << pi << "\n\n"; //Nota��o Cientifica
                //Valor de num
    cout << "Valor de NUM1 em dec: " << num1 << "\n";
    cout << "Valor de NUM1 em hex: " << hex << num1 << "\n"; //Converte para Hexadecimal
    cout << "Valor de NUM1 em oct: " << oct << num1<< "\n"; //Converte para Octadecimal
    cout << "Valor de NUM1: " << setbase(8) << num1 << "\n\n"; //Converte a base

    //cout << "Valor de num2: " << setw(10) << setfill('0') << num2 << "\n"; //setw e espa�os, setfill � oque sera preenchido

 	return 0;

}
