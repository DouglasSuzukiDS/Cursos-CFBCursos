#include <iostream>

using namespace std;

struct Carro{
    string nome;
    string cor;
    int pot;
    int velMax;
    int vel;

    void insere(string stnome, string stcor, int stpot, int stvelMax){
        nome=stnome;
        cor=stcor;
        pot=stpot;
        velMax=stvelMax;
        vel=0;
    }

    void mostra(){
        cout << "\nNome.............: " << nome << "\n";
        cout << "Cor..............: " << cor << "\n";
        cout << "Potencia.........: " << pot << "\n";
        cout << "Velocidade Atual.: " << vel << "\n";
        cout << "Velocidade Maxima: " << velMax << "\n";
    }

    void mudaVel(int mv){
        vel=mv;
        if(vel > velMax){
            vel=velMax;
        }
        if (vel < 0){
            vel=0;
        }
    }
};

int main (){

    Carro car1,car2,car3,car4;

    car1.insere("Tornado","Vermelho",450,350);
    //car2.insere("Luxo","Preto",250,260);

	car1.mostra();
	car1.mudaVel(400); //Acima disso acrescenta a Vel.Max.
	car1.mostra();

	return 0;

}
