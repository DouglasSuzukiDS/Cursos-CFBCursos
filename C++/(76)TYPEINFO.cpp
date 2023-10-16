#include <iostream>
#include <typeinfo>

using namespace std;

class CFBCURSOS{
};

int main (){

	/*auto num{10.5};   //Typeid(VARIAVEL).name() Mostra o tipo da variavel

    CFBCURSOS cfb;

	cout << " Tipo de num: " << typeid(cfb).name() << endl;*/

    if(typeid(int).before(typeid(double))){
        cout << "inr vem antes de double" << endl;
    }else{
        cout << "double vem antes de int" << endl;
    }

	return 0;

}
