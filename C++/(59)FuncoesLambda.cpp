#include <iostream>
#include <vector>

using namespace std;

int main (){

	//auto maior=[](int n1, int n2)->int{
	//return(n1>n2)?n1:n2; // Operador Ternário};

    /*int x1,x2,x3,x4;
    x1=1;
    x2=1;
    x3=1;
    x4=1;
        //Se colocar [=] captura todas as variaveis do escopo.
	auto soma=[x1,x2,x3,x4]()->int{
        return x1+x2+x3+x4;
	};
	//cout << soma() << endl;

	auto maior=[=](vector<int>n)->int{

	    auto m=0;
	    for(int x:n){
            m=(m>x)?m:x;
	    }
        return m+x1+x2+x3+x4;

	};
        cout << maior({1,2,3,4,5,6,7,8,9,0}) << endl;

	//cout << maior({9,8,2,10,45,20,5,4,12,7,100}) << endl;*/

	auto soma=[](vector<int>n)->int{
        auto s=0;
        for(int x:n){
          s+=x;
        }
        return s;
	};

	cout << soma({1,2,3,4,5,6,7,8,9,0,50,14,72,32,451,1,54,8}) << endl;

	return 0;

}
