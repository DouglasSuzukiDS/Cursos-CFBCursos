#include <iostream>
#include <set> //Elementos sempre ordenados

using namespace std;

int main (){

    set<int>st1={9,1,0,2,8,3,7,4,6,5};
    set<int>::iterator it;

    for(auto x:st1){
        cout << x << " - ";
    }
    cout << endl;

    //---------------------------------------------------------

    set<int>st2={50,90,30,80,20,70,60};
    it=st2.begin();
    st2.insert(it,40);
    it=st2.end();
    st2.insert(it,10);
    it=++ ++ ++st2.begin();
    st2.insert(it,90);
    for(auto x:st2){
        cout << x << " - ";
    }
    cout << endl;

    //-------------------------------------------------------------------

    set<int>st3={9,1,0,2,8,3,7,4,6,5};
    it=st3.begin();
    st3.erase(it);
    it=st3.end();
    st3.erase(it);
    it=++st3.begin();
    st2.erase(it);

    for(auto x:st3){
        cout << x << " - ";
    }
    cout << endl;

    //------------------------------------------------------------------

	set<int>st6={9,1,0,2,8,3,7,4,6,5};
	it=st6.begin();
	st6.emplace_hint(st6.begin(),10); //Permite inserir elementos, so que se ele existe n�o � inserido, insere so novo, n�o duplica

	for(auto x:st6){
        cout << x << " - ";
	}
	cout << endl;

	//FIND - Retorna um iterator com o elemento pesquisado --------------

    set<int>st7={9,1,0,2,8,3,7,4,6,5};
    it=st7.find(8); //Verifica se tem o elemento, se tiver ele retorna

    cout << *it << endl;
    cout << endl;

    //COUNT - Conta quantos elementos de um determinado valos existentente em um container

	set<int>st8={9,1,0,2,8,3,7,4,6,5};

	if(st8.count(2)!=0){
        cout << "Esta no container" << endl;
	}else{
        cout << "NAO esta no container" << endl;
	}
	cout << endl;

	//LOWER BOUND e UPPER BOUND - Retorna um iterator com o elemento encontrado

    set<int>st9={9,1,0,2,8,3,7,4,6,5};
    it-st9.lower_bound(2);
    cout << *it << endl;

    cout << endl;

	return 0;

}
