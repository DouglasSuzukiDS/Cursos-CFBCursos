#include <iostream>
#include <memory> //Para Smart Pointer

class Carro{
public:
    int velMax;
    int potencia;
    const char* nome;

    Carro(const char* n, int p):nome(n),potencia(p){ //Lista Inicialização Uniforme
        //this->nome=n;   // Sem ultilizaçã uniforme
        //this->potencia=p;
        if(p<100){
            this->velMax=120;
        }else if(p<200){
            this->velMax=220;
        }else{
            this->velMax=350;
        }
    }
};

using namespace std;

int main (){

    /*Carro *c1=new Carro("OnePiece",80);  // A -> só é usada quando é "new"
    cout << c1->nome << " - " << c1->potencia << " - " << c1->velMax << endl;
    delete c1; */  //Sem Inicialização uniforme

    /*Carro c1{"OnePiece",70};  //Quando não é "new" se usa o Ponto(.)
    cout << c1.nome << " - " << c1.potencia << " - " << c1.velMax << endl;*/
    //Usado com Inicialização Uniforme.

    unique_ptr<Carro>c1(new Carro{"OnePiece",85});
    cout << c1->nome << " - " << c1->potencia << " - " << c1->velMax << endl;

    Carro c2{"Ventania",400};
    cout << c2.nome << " - " << c2.potencia << " - " << c2.velMax << endl;

	return 0;

}
