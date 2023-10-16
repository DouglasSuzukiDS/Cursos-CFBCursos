#include <iostream>

using namespace std;

int main (){

	int num;
	/*
	AND( && ) é usado quando todas os testes forem verdadeiros;
	OR ( || ) é usado quando pelo menos um teste for verdadeiro;
	NOT ( ! ) é usado pra inverter o resultado

	1 = Verdadeiro/True
	0 = Falso/False

	if (num == 1) / if(num)
    if (num == 0) / if(!num)
    if (num !== 1 / if(!num)
	*/

    /*num = 7;
    if(num > 4 && num < 7){
        cout << "\n\nValor Aceito\n";
    }else{
        cout << "\nNao Aceito\n";
    }*/

    /*if(num <3 || num > 8){
        cout << "\n\nValor Aceito\n";
    }else{
        cout << "\nNao Aceito\n";
    }*/

    /*if( (num >= 3 && num <= 6) || (num > 9 && num < 15) || (num > 15 && num < 20) ){
        cout << "\n\nValor Aceito\n";
    }else{
        cout << "\nNao Aceito\n";
    }*/

	num=0;

	if(num){
        cout << "\n\nVou ao clube\n";
    }else{
        cout << "\n\nVou ao cinema\n";
    }

	return 0;

}
