#include <iostream>
//#include <vector>
//#include <stdexcept>

using namespace std;

double divide(double,double);

int main (){

    double n1,n2;

    cin >> n1 >> n2;

    try{
        cout << divide(n1,n2);
    }catch(const char* e){
        cout << "ERRO: " << e << endl;
    }

	/*vector<int>num(5); // 0 1 2 3 4

	try{
        num.at(4)=10;
        cout << num[4] << endl;
	}catch(exception& e){
        cout << "ERRO: " << e.what() << endl;
	}*/

	return 0;

}

double divide(double n10,double n20){
    if(n20==0){
        throw "Erros de divisao por ZERO";
    }
    if(n10 >=10){
        throw "N1 precisa ser menor que 10";
    }
    return n10/n20;
}

