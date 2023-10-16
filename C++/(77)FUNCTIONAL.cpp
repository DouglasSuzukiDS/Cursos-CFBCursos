#include <iostream>
#include <functional>

using namespace std;

int soma(int n1, int n2){
    return n1+n2;
}

struct cfb{
    int num;
    int dobro(){
        return num*2;
    }
};

class Cfb{
public:
    int num;
    Cfb(int n):num(n){};
    int dobro(){
        return num*2;
    }
};

int main (){

	//bind Ligação de uma função a uma variavel
	/*int n1=10;
	const int n2=5;

	auto s1=bind(soma,n1,n2);

	cout << s1() << endl;*/

	//cref cria a referencia entre 2 elementos

	/*int n1=10;

	auto n2=cref(n1);

	cout << n2 << endl;*/

	/*cfb n{10};
	cfb n2{5};

	auto dobro2=mem_fn(&cfb::dobro);

	cout << dobro2(n2) << endl;*/

	Cfb n1{10};
	Cfb n2{5};

	auto dobro2=mem_fn(&Cfb::dobro);

	cout << dobro2(n1) << endl;


	return 0;

}
