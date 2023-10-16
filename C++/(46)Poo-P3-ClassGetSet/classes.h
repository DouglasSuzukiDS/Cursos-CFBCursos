#ifndef CLASSES_H_INCLUDED
#define CLASSES_H_INCLUDED //46

class Veiculo{
public:
    int vel;
    int tipo;
    Veiculo(int tp); //Construtor = Método que é chamado quando se instância um objeto;
    int getVelMax();
    bool getLigado();
    void setLigado(int l);
private: //Só podem ser acesso dentro da própria classe;
    void setVelMax(int vm);
    std::string nome;
    int velMax;
    bool ligado;
};

 bool Veiculo::getLigado(){
    return ligado;
 }

 void Veiculo::setLigado(int l){
    if(l==1){
        ligado=true;
    }else if (l==0){
        ligado=false;
    }
 }

int Veiculo::getVelMax(){
    return velMax;
}

void Veiculo::setVelMax(int vm){
    velMax=vm;
}

Veiculo::Veiculo(int tp){ //1=Carro  2=Avião  3=Navio
    tipo=tp;
    if(tipo==1){
        nome="Carro";
        setVelMax(200);
    }else if(tipo==2){
        nome="Aviao";
        setVelMax(800);
    }if(tipo==3){
        nome="Navio";
        setVelMax(120);
    }
setLigado(0);  //Quando se estancia um objeto, ele já e criado "desligado"
}


#endif // CLASSES_H_INCLUDED
