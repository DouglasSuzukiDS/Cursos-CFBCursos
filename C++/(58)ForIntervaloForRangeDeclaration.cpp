//For-Range-Declaration
#include <iostream>
#include <vector>

using namespace std;

int main (){

	int x[10]{10,20,30,40,50,60,70,80,90,100};
	vector<int>n{100,200,300,400,500,600,700,800,900,1000};

	const char* nome="Marco";  //Const char*=String

	/*for(int i=0;i<sizeof(x)/4;i++){
        cout << x[i] << endl;
	}*/

	/*for(int i:x){
        cout << i << endl;
	}*/

	for(auto i:n){
        cout << i << endl;
	}

	for(int i=0;i<=sizeof(nome);i++){
        cout << nome[i] << endl;
	}

	return 0;

}
