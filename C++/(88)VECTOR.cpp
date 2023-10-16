#include <iostream>
#include <vector>

using namespace std;

int main (){

	vector<int>vct1={0,1,2,3,4};
	vector<int>::iterator it;
	vector<int>vct2={5,6,7,8,9};

	/*if(vct.empty()){
        cout << "Vector vazio" << endl;
	}else{
        cout << "Vector NAO esta vazio" << endl;
	}

    //for(auto it=vct.rbegin();it!=vct.rend();it++){
        //cout << *it << endl;}

    cout << vct.size() << endl; //Numero atual de elementos
    cout << vct.max_size() << endl; //Numero maximo de elementos

    vct.resize(5);
    cout << vct.size() << endl;

    for(auto x:vct){
        cout << x << endl;
    }

    cout << endl;

    vct.shrink_to_fit(); //Transforma a capacidade do vector no "resize"

    cout << vct.capacity()<< endl;*/

    /*cout << vct[3] << endl;   //Acesso do elemento
    cout << vct.at(3) << endl;
    cout << vct.front() << endl;  //Perimeiro elemneto
    cout << vct.back() << endl;*/   //Ultimo elemnto

    /*vct2.assign(vct.begin(),vct.end()); //Atribui elementos

    for(auto x:vct2){
        cout << x << endl;} */

    //vct1.push_back(0); //Acrecenta elemento no final
    //vct1.pop_back();     //Remove o ultimo elemento

    //it=vct1.begin();
    //vct1.insert(it,5,9); //Insere o elemento
    //vct1.erase(vct1.begin()+6,vct1.end());

    //vct1.swap(vct2); //Troca os elementos
    //vct2.clear(); //Limpa os elementos

    //vct1.emplace(vct1.begin()+2,9); //Insere o elemento sem remover
    vct1.emplace_back(9); //Insere no final
    for(auto x:vct1){
        cout << x << endl;}

	return 0;

}
