#include <iostream>
#include <array>

using namespace std;

int main (){

	array<int,10>vt={2,4,6,8,0,1,3,5,7,9};
	array<int,10>cfb;

	/*for(auto it=vt.rbegin();it!=vt.rend();it++){
        cout << *it << endl;
	}*/ //Assim mostra o Array de tras pra frente

	/*cout << vt.size() << endl;      //Tamanho do elemento
	cout << vt.max_size() << endl;
	if(vt.empty()){
        cout << "Array vazio" << endl;
	}else{
        cout << "Array NAO esta vazio" << endl;
	}*/

	/*cout << vt[4] << endl; //Acessa o elemento
	cout << vt.at(4) << endl;
	cout << vt.front() << endl; //Mostra o primeiro elemento
	cout << vt.back() << endl; //Mostra o ultimo elemento */

	cfb.fill(5);  //FILL = Preenche o array com o caractere selecionado

    vt.swap(cfb);

	for(auto x:cfb){
        cout << x << " - ";
	}
	cout << endl;
	for(auto x:vt){
        cout << x << " - ";
	}
	cout << endl;

	return 0;

}
