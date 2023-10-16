#ifndef CLASS_H_INCLUDED
#define CLASS_H_INCLUDED   //47

class Veiculo{
public:
    int vel;
    int blind;
    int rodas;
    void setTipo(int tp);
    void setVelMax(int vm);
    void setArma(bool ar);
    void imp();
private:
    int tipo; //1=Moto 2=Carro 3=Caminhão 4=Tanque de Guerra
    int velMax;
    bool arma;
};

void Veiculo::imp(){
    std::cout << "Tipo veiculo.....: " << tipo << std::endl;
    std::cout << "Velocidade Maxima: " << velMax << std::endl;
    std::cout << "Qtde rodas.......: " << rodas << std::endl;
    std::cout << "Brindagem........: " << blind << std::endl;
    std::cout << "Armamento........: " << arma << std::endl;
    std::cout << "--------------------------------------" << std::endl;
}

void Veiculo::setTipo(int tp){
    tipo=tp;
}
void Veiculo::setVelMax(int vm){
    velMax=vm;
}
void Veiculo::setArma(bool ar){
    arma=ar;
}

class Moto:public Veiculo{ //Class Moto que Herda todos os elementos da Classe Veiculo
public: //Construtor
    Moto();
};

Moto::Moto(){
    vel=0;
    blind=0;
    rodas=2;
    setTipo(1);
    setVelMax(120);
    setArma(false);
}
class Carro:public Veiculo{
public:
    Carro(); //Construtor
};

Carro::Carro(){
    vel=0;
    blind=0;
    rodas=4;
    setTipo(2);
    setVelMax(180);
    setArma(false);
}

class Tanque:public Veiculo{
public:
    Tanque(); //Construtor
};

Tanque::Tanque(){
    vel=0;
    blind=1;
    rodas=8;
    setTipo(4);
    setVelMax(200);
    setArma(true);
}

#endif // CLASS_H_INCLUDED
