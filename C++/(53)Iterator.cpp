#include <iostream>
#include <vector>

using namespace std;

int main (){

    vector<string>produtos={"mouse","teclado","monitor","gabinete","cx.som"};
    vector<string>::iterator it;

    for(it=produtos.begin();it!=produtos.end();it++){
        cout << *it << endl;
    }

    //for(vector<string>::iterator it=produtos.begin();it!=produtos.end();it++)
    //funciona assim tambem


    //advance=Avança
    //next=Proximo
    //prev=Volta

    //advance(it,1);

	return 0;

}
