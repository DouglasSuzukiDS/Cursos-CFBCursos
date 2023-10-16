#include <iostream>

using namespace std;
//Private:Não permite acesso em classes herdadas da classe pai. Acesso somente na base original.
//Protected: Permite acesso em classes que estar herdadando a classe base.
//Quando se estancia um objeto externamente, não se pode acessar o private e protected
class Veiculo{
private:
    int velMax;
    int potencia;
public:    //Pode ser acessada por dentro e fora da classe.
    int rodas;
    const char* nome;
protected:
    int portas;
    const char* cor;
};

class Carro:public Veiculo{
public:
    Carro(){
        //velMax=180;
        //potencia=150;
        rodas=4;
        nome="Carro";
        portas=4;
        cor="vermelho";

        //cout << velMax << end;
        //cout << potencia << end;
        cout << rodas << endl;
        cout << nome << endl;
        cout << portas << endl;
        cout << cor << endl;
    }
};

class Moto{
public:
    Carro c;   //Antes do nome do metedo é preciso colocar o nome do metodo com .
    Moto(){
        //velMax=250;
        //potencia=500;
        c.rodas=2;
        c.nome="Moto";
        //portas=0;
        //cor="Preto";

        //cout << velMax << end;
        //cout << potencia << end;
        cout << c.rodas << endl;
        cout << c.nome << endl;
        //cout << portas << endl;
        //cout << cor << endl;
    }
};

int main (){

    Carro v1;
    cout << endl << endl;
    Moto v2;

	return 0;

}
