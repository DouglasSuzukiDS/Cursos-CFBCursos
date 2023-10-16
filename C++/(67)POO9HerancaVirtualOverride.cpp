#include <iostream>

using namespace std;

class Veiculo{
private:
    const char* nome;
    const char* cor;
public:
    int velMax;
    int rodas;
    void setNome(const char* no){
        nome=no;
    }
    const char* getNome(){
        return nome;
    }
    void setCor(const char* co){
        cor=co;
}
    const char* getCor(){
        return cor;
    }
    virtual void imp(){  //Virtual diz que alguns dos "Filhos" vai sobreescrever o metodo
        cout << "Nome...: " << nome << endl;
        cout << "Cor....: " << cor << endl;
        cout << "Rodas..: " << rodas << endl;
        cout << "Vel.Max: " << velMax << endl << endl;
    }
};

class Carro:public Veiculo{
public:
    Carro(){
        velMax=160;
        rodas=4;
        setNome("Carro");
        setCor("Branco");
    }
};

class Moto:public Veiculo{
public:
    Moto(){
        velMax=200;
        rodas=2;
        setNome("Moto");
        setCor("Preto");
    }
};

class Militar:public Veiculo{
public:
    int municao;
    bool armamento;
    Militar(bool arma,int mu):armamento(arma),municao(mu){
        velMax=160;
        rodas=6;
        setNome("Tanque");
        setCor("Verde");
        if(arma){
            municao=mu;
        }else{
            municao=0;
        }
    }
    void imp()override{  //Override sobreescreve um metodo da Classe "Pai"
        cout << "Nome.......: " << getNome() << endl;
        cout << "Cor........: " << getCor() << endl;
        cout << "Rodas......: " << rodas << endl;
        cout << "Vel.Max....: " << velMax << endl;
        cout << "Armamento..: " << armamento << endl;
        cout << "Municao....: " << municao << endl << endl;
    }
};

int main (){

    Carro v1;
    v1.imp();

    Moto v2;
    v2.imp();

    Militar v3{false,200};
    v3.imp();

    Militar v4{true,100};
    v4.imp();

	return 0;

}
