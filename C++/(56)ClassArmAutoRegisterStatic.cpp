#include <iostream>
#include <vector>

using namespace std;

/*auto soma(double n1,double n2)->double{
    return n1+n2;
}

string canal(){
    return "CFB Cursos";
}*/

void somador(){
    static auto i=0; //Usa a memoria ja existente
    i++;
    cout << i << endl;
}

int main (){

	/*auto num=10;  //Auto usado pra da valor a variavel
	auto nome="Bruno";
	auto valor=10.5;*/

	//register int cont; //Pedido, armazenado no processador, acesso rapido

	/*vector<int>v{10,20,30,40,50,60,70};

	for( register auto it=v.begin();it!=v.end();it++){
        cout << *it << endl;
	}*/

    /*auto res=soma(10.3,5.2);

    cout << res << endl;*/

    somador();
    somador();
    somador();
    somador();
    somador();
    somador();

	return 0;

}
