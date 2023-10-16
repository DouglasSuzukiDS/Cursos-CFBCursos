#include <iostream>
#include <cstdlib>
using namespace std;

int main (){
    // Comando de decisão IF ELSE e comando Goto, Parte 2

	int n1, n2, res;
	char opc;

	inicio:

    system("cls"); //apaga a tela

	cout << " Digite o valor na Nota1: ";
	cin >> n1;
	cout << " Digite o valor na Nota2: ";
	cin >> n2;

	res=n1+n2;

	/*
        >= 60        Aprovado
        >= 40 e < 60 Recuperação
        <40          Reprovado

    */

	if(res >=60){
	    cout << "\nAluno Aprovado\n";
	}else if(res >=40){
        cout << "\nAluno em Recuperacao\n";
	}else{
	    cout << "\nAluno Reprovado\n";
	}

    cout << "\n\nDigitar outras notas? (s/n): ";
    cin >> opc;

    if(opc == 's' or opc == 'S'){
        goto inicio; //faz o programa voltar pro inicio

    }
	return 0;

}
