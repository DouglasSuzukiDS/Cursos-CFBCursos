#include <iostream>

using namespace std;

int main (){

	int val;
        //Comando básico*
	/*switch(expressão){
        case const1;
            comandos;
            break;
        case const2;
            comandos;
            break;
        default;
            comandos;
	}*/

	/*cout << "Selecione uma cor:\n";
	cout << "[1]=Verde, [2]=Azul, [3]=Vermelho\n";

	cin >> val;

	switch(val){
        case 1:
            cout << "Cor selecionada: Verde\n";
            break;
        case 2:
            cout << "Cor selecionada: Azul\n";
            break;
        case 3:
            cout << "Cor selecionada: Vermelho\n";
            break;
        default:
            cout << "Valor selecionado invalido\n";

            Variação
	cout << "Selecione uma cor:\n";
	cout << "[1,2,3]=Verde, [4,5,6]=Azul\n";

	cin >> val;

	switch(val){
        case 1:
        case 2:
        case 3:
            cout << "Cor selecionada: Verde\n";
            break;
        case 4:
        case 5:
        case 6:
            cout << "Cor selecionada: Azul\n";
            break;

        default:
            cout << "Valor selecionado invalido\n";*/

                    //Switch alinhado
	cout << "Selecione um transporte:\n";
	cout << "[1]=Carro, [2]=Moto, [3]=Aviao, [4]=Helicoptero\n" ;

	cin >> val;

	switch(val){
        case 1:
        case 2:
            cout << "Transporte Terrestre:\n";
            switch(val){
                case 1:
                     cout << "Carro selecionado\n";
                     break;
                case 2:
                     cout <<"Moto selecionada\n";
                     break;
            }

            break;
        case 3:
        case 4:
            cout << "Transporte Aereo:\n";
            switch(val){
                case 3:
                     cout << "Aviao selecionado\n";
                     break;
                case 4:

                    cout <<"Helicoptero selecionada\n";
                    break;
            }
        break;

        default:
            cout << "Transporte selecionado invalido\n";

	}

    cout << "\nPrograma finalizado\n";

    return 0;

}
