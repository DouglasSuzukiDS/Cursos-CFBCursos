#include <iostream>

using namespace std;

struct Carro{   //Struct:Coleção de Variaveis e Metodos
    string nome;
    string cor;
    int pot;
    int velMax;
};

int main (){

    Carro car1;
    Carro car2;

    car1.nome = "Tornado";
    car1.cor = "Vermelho";
    car1.pot = 450;
    car1.velMax = 350;

    cout << "Nome.............: " << car1.nome << "\n";
    cout << "Cor..............: " << car1.cor << "\n";
    cout << "Potencia.........: " << car1.pot << "\n";
    cout << "Velocidade Maxima: " << car1.velMax << "\n\n";

    car2.nome = "Luxo";
    car2.cor = "Preto";
    car2.pot = 250;
    car2.velMax = 260;

    cout << "Nome.............: " << car2.nome << "\n";
    cout << "Potencia.........: " << car2.cor << "\n";
    cout << "Potencia.........: " << car2.pot << "\n";
    cout << "Velocidade Maxima: " << car2.velMax << "\n";

	return 0;

}
