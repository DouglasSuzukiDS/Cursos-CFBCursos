#include <iostream>
#include <memory>

class Carro{
public:
    int vel=0;
    int getVel(){
        return vel;
    }
    void setVel(int v){
        this->vel=v;
    }
};

using namespace std;

int main (){

	//int *pnum=new int();
    //unique_ptr<int>pnum(new int); //Ponteiro Unico
    //shared_ptr<int>pnum(new int); //Ponteiro Compartilhado
    /* *pnum=10;

	cout << *pnum << " - " << &pnum << endl;*/

    /*string*str=new string("CFB Cursos");  //Ponteiro Comum.
    cout << *str << " - tamanho: " << str->size() << endl;
    delete str;*/

    /*unique_ptr<string>str(new string("CFB Cursos")); //Ponteiro Inteligente
    cout << *str << " - tamanho: " << str->size() << endl;*/

    /*Carro *c1=new Carro();   //Metodo comum.
    cout << "Velocidade: " << c1->getVel() << endl;
    delete c1;*/

    /*shared_ptr<Carro>c1(new Carro);  //Ambos vão ter o mesmo valor
    shared_ptr<Carro>c2=c1;*/
    unique_ptr<Carro>c1(new Carro);
    unique_ptr<Carro>c2(new Carro);
    c1->setVel(10);
    c2->setVel(5);
    //unique_ptr<Carro>c1(new Carro);
    cout << "Velocidade c1: " << c1->getVel() << endl;
    cout << "Velocidade c2: " << c2->getVel() << endl;

	return 0;

}
